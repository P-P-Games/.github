# PP Games

## Android Build - How Tos

### Error, SDK licenses are note accepted
This is the MAC Os command that will find all SDK installation inside all Unity Editors and for each execute sdkmanager --licenses to accept them
```shell
find /Applications/Unity/Hub/Editor -name "sdkmanager" -exec {} --licenses \;
```
