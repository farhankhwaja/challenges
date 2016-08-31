#
# Cookbook Name:: api
# Recipe:: default
#
# Copyright (c) 2016 The Authors, All Rights Reserved.
execute 'apt-get -y update'
execute 'rm -rf /var/lib/apt/lists/*'
execute 'apt-get clean'
