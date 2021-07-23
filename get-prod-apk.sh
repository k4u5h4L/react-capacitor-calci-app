cd android && 
./gradlew assembleRelease && 
cd app/build/outputs/apk/release &&
jarsigner -keystore YOUR_KEYSTORE_PATH -storepass YOUR_KEYSTORE_PASS app-release-unsigned.apk YOUR_KEYSTORE_ALIAS &&
zipalign 4 app-release-unsigned.apk app-release.apk
