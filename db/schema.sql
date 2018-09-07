drop database if exists burgers_db;
create database burgers_db;
use burgers_db;

CREATE TABLE burgers(
	item_id integer auto_increment not null,
	burger_name CHAR(50) not null,
	devoured BOOLEAN,
    primary key (item_id)
);