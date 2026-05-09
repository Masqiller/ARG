import json
import os
import sys
import time
import urllib.request
import urllib.error

def fetch_stars():
    repos_path = "/home/smit/Downloads/Fusion/graphify-out/unique_repos.json"
    output_path = "/home/smit/Downloads/Fusion/graphify-out/repo_stars.json"

    if not os.path.exists(repos_path):
        print("Unique repos list not found!")
        return

    with open(repos_path, 'r') as f:
        repos = json.load(f)

    # Load existing stars if any
    stars_db = {}
    if os.path.exists(output_path):
        with open(output_path, 'r') as f:
            stars_db = json.load(f)

    print(f"Attempting to fetch stars for {len(repos)} repos...")
    
    # Use token if available in environment
    headers = {
        "User-Agent": "ARG-Sovereign-Bot"
    }
    token = os.environ.get("GITHUB_TOKEN")
    if token:
        headers["Authorization"] = f"token {token}"

    count = 0
    for repo in repos:
        if repo in stars_db:
            continue # Skip already fetched

        url = f"https://api.github.com/repos/{repo}"
        req = urllib.request.Request(url, headers=headers)
        
        try:
            print(f"Fetching {repo}...")
            with urllib.request.urlopen(req) as response:
                data = json.loads(response.read().decode())
                stars = data.get("stargazers_count", 0)
                stars_db[repo] = stars
                print(f"-> {repo}: {stars} stars")
                count += 1
                
                # Save after every success to preserve data
                with open(output_path, 'w') as f:
                    json.dump(stars_db, f, indent=2)
                
                time.sleep(1) # Avoid spamming
                
        except urllib.error.HTTPError as e:
            if e.code == 403:
                print("Rate limit exceeded or forbidden! Stopping.")
                print(e.headers)
                break
            else:
                print(f"Error fetching {repo}: {e}")
        except Exception as e:
            print(f"Error: {e}")

    print(f"Finished. Fetched {count} new repo star counts.")

if __name__ == "__main__":
    fetch_stars()
