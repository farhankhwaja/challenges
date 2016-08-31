#
# Cookbook Name:: api
# Recipe:: npm
#
# Copyright (c) 2016 The Authors, All Rights Reserved.
execute 'npm i' do
  cwd '/var/www/api'
end
