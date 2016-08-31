#
# Cookbook Name:: api
# Recipe:: directories
#
# Copyright (c) 2016 The Authors, All Rights Reserved.
directories = ['/var/www', 'api']
path = ''

directories.each do |dir|
  path = File.join(path, dir)

  directory path do
    owner 'root'
    group 'root'
    mode '0444'
    action :create
  end
end
