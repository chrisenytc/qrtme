# ![QRtme](www/img/icon.png)

> A app to help people to access their links from their computer to their phone without typing anything, only using QR Codes

[![GH version](https://badge-me.herokuapp.com/api/gh/chrisenytc/qrtme.png)](http://badges.enytc.com/for/gh/chrisenytc/qrtme)

## Requirements

* Android SDK
* Android SDK Tools
* Android SDK Platform Tools
* Android SDK Build Tools
* Android 5.0.1 (API 21)

## Getting Started

1º Clone QRtme repo

```bash
$ git clone https://github.com/chrisenytc/qrtme.git
```

2º Enter in qrtme directory
```bash
$ cd qrtme
```

3º Install dependencies

```bash
$ make install
```

4º Add platforms

```bash
$ ionic platform add android
```

5º Install plugin dependencies

```bash
$ make plugins
```

Run on your browser

```bash
$ make start
```

Run on your connected device via usb

```bash
$ make device
```

## Building your own QRtme app

1º Clear unused plugins

```bash
$ make clear
```

2º Build

```bash
$ make build
```

3º Create a keystore

```bash
$ make keystore
```

3º Use the signer

```bash
$ make signer
```

3º Create the release APK

```bash
$ make release
```

## Contributing

Please submit all issues and pull requests to the [chrisenytc/qrtme](http://github.com/chrisenytc/qrtme) repository!

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/chrisenytc/qrtme/issues).

## License 

The BSD License

Copyright (c) 2014, EnyTC Corporation

All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice, this
  list of conditions and the following disclaimer in the documentation and/or
  other materials provided with the distribution.

* Neither the name of the EnyTC Corporation nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

