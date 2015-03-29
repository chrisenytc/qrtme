# qrtme
# https://github.com/chrisenytc/qrtme
#
# Copyright (c) 2015, Christopher EnyTC
# Licensed under the BSD license.


install:
	npm install -g ionic cordova && npm install && gulp install

plugins:
	ionic plugin add https://github.com/wildabeast/BarcodeScanner.git && ionic plugin add https://github.com/VersoSolutions/CordovaClipboard

start:
	ionic serve

device:
	ionic run android --device

clear:
	ionic plugin rm org.apache.cordova.console

build:
	ionic build --release android

keystore:
	keytool -genkey -v -keystore qrtme.keystore -alias qrtme -keyalg RSA -keysize 2048 -validity 10000

signer:
	jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore qrtme.keystore platforms/android/ant-build/MainActivity-release-unsigned.apk qrtme

release:
	zipalign -v 4 platforms/android/ant-build/MainActivity-release-unsigned.apk QRtme.apk

.PHONY: build signer release