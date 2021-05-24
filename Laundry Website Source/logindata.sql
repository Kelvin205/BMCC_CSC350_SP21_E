create database login; #create database

use login; #set default schema

create table account (userId varchar(10), password varchar(16)); #create table

insert into account values ("user1", "password1"); #user 1
insert into account  values ("user2", "password2"); #user 2
insert into account values ("user3", "password3"); #user 3
insert into account  values ("user4", "password4"); #user 4
insert into account values ("user5", "password5"); #user 5

SELECT * FROM account; #select everything from table