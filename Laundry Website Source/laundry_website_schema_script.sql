/*
CSC 350 Group E - Kelvin Bermejo, Mareko Cooper, Jerry Galicia
*/
drop database if exists laundry_website;
create database laundry_website;
use laundry_website;

drop table if exists Credentials;
create table Credentials(userid varchar(20), password char(16));
insert into Credentials(userid, password) values
("Apartment1", "abc123"),
("Apartment2", "abc123"),
("Apartment3", "abc123"),
("Apartment4", "abc123"),
("Apartment5", "abc123"),
("Apartment6", "abc123"),
("Apartment7", "abc123"),
("Apartment8", "abc123"),
("Apartment9", "abc123"),
("Apartment10", "abc123"),
("Apartment11", "abc123"),
("Apartment12", "abc123"),
("Apartment13", "abc123"),
("Apartment14", "abc123"),
("Apartment15", "abc123"),
("Apartment16", "abc123"),
("Apartment17", "abc123"),
("Apartment18", "abc123"),
("Apartment19", "abc123"),
("Apartment20", "abc123"),
("Apartment21", "abc123"),
("Apartment22", "abc123"),
("Apartment23", "abc123"),
("Apartment24", "abc123"),
("Apartment25", "abc123");

drop table if exists Reservations;
create table Reservations(userid varchar(20), week_day varchar(10), slot varchar(10));