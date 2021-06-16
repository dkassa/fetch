# FetchRewardsTestApp
 Fetch Rewards Test App by Zach Meyers

 This exercise was completed using Node.js and Express as the app server and backend. It runs inside a Docker container for ease of use and portability. This install and user guide assumes you will be using Windows.

 To install the app, follow these steps:
 - Download and install Docker Desktop (https://www.docker.com/get-started) for Windows. You will need to restart at least once, twice if the installation asks you to also install the Windows Subsystem for Linux update package.
 - Once Docker Desktop is installed, checkout the repo to your local machine.
 - Open a Windows Command Prompt (not Powershell, good old CMD).
 - Input the following command to build the container:
    - docker build -t fetch_rewards_test_app .
- Input the following command to start the container:
    - docker run --rm -p 3000:3000 --name fetch_rewards_test_app fetch_rewards_test_app
- Container should now be running. You can check in Docker Desktop to make sure. 
- NOTE: You must use port 3000, as that is what the app uses.

Once you verify the container is up and running, the following are instructions on how to talk to the service (all communication with the service will be through cURL, so open a Windows Command Prompt if you don't have one open already):
- There are 4 endpoints:
    - /points/add -> Adds points
    - /points/spend -> Spends points
    - /points/list -> List all points balances by payer
    - /points/clear -> Clears the points balances and list of transactions to start fresh so you don't have to restart the docker container to begin with a fresh slate
- To add points, run the following command:
    - curl -X POST http://localhost:3000/points/add --header "Content-Type: application/json" -d "{\"<payer>\": \"<payer name here\", \"points\": <points value here>, \"timestamp\": \"<timestamp here>\"}"
    - NOTE: The timestamp must be in the format of "YYYY-MM-DDTHH24:MM:SSZ"
    - NOTE: For any commands where you send data, you must escape the inner quotes for the JSON data (the \" in the format above) as Windows doesn't accept nested double quotes.
- To spend points, run the following command:
    - curl -X POST http://localhost:3000/points/spend --header "Content-Type: application/json" -d "{\"points\": <points value here>}"
- To list all points balances by payer, run the following command:
    - curl http://localhost:3000/points/list
- To clear the points values to start fresh, run the following command:
    - curl http://localhost:3000/points/clear
