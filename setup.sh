npm i npm@latest
npm run dev-install 
cd api && rm -f local.settings.json && touch local.settings.json 
echo '{'>>local.settings.json 
echo '"IsEncrypted": false,' >>local.settings.json 
echo '    "Values": {' >>local.settings.json 
echo '        "AzureWebJobsStorage": "",' >>local.settings.json 
echo '        "FUNCTIONS_WORKER_RUNTIME": "node",' >>local.settings.json 
echo '        "MONGO_LINK": "mongodb://localhost:27017/dev",' >>local.settings.json 
echo '        "AZURE_BLOB_CONNECTION_STRING": "DefaultEndpointsProtocol=http;AccountName=devstoreaccount1;AccountKey=Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==;BlobEndpoint=http://127.0.0.1:10000/devstoreaccount1;",' >>local.settings.json 
echo '        "REACT_APP_GOOGLE_AUTH_CLIENT_ID": "691540684671-tu8rdq80k4juqk68j8tblm8vcts4ni5u.apps.googleusercontent.com",' >>local.settings.json 
echo '        "AZURE_BLOB_URL": "http://localhost:10000/",' >>local.settings.json 
echo '        "HOST": "http://localhost:7071"' >>local.settings.json 
echo '    }' >>local.settings.json 
echo '}' >>local.settings.json