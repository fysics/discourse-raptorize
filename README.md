# Discourse Raptorize Plugin

**ATTENTION: under construction**


Enabled raptorized discourse pages

## Details

## Installation

Just two easy steps. From your main discourse directory do:

```shell
cd plugins
git clone https://github.com/Cosban/discourse-raptorize.git
cd ..
RAILS_ENV=production rake assets:precompile
```


If you're running discourse inside a docker container:

 - Add the plugin's `git clone` url inside your `app.yml` where your other plugins are:


```yaml
hooks:
  after_code:
    - exec:
        cd: $home/plugins
        cmd:
          - mkdir -p plugins
          - git clone https://github.com/discourse/docker_manager.git
          - git clone https://github.com/Cosban/discourse-raptorize.git
```

 - Rebuild the docker containter:

```shell
cd /var/discourse
./launcher rebuild app
```

## Changelog:

 * 2014-08-30
   - initial code dump

## TODO

(in order of importance)


### other Limitations:


## Authors:
cosban, fysx, Phil Coffman, Noah Stokes, and the developers at ZURB

## License (MIT)
Copyright (c) 2014

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
