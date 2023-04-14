create database aqua_fish_website;
use aqua_fish_website;

create table employee_type (
id int primary key auto_increment,
name varchar(45)
);
create	table employee(
id int primary key auto_increment,
name varchar(45),
phone_number varchar(45),
id_card varchar(45) unique,
address varchar (225),
gender boolean,
is_deleted boolean,
day_of_birth date,
position_id int,
email_account varchar(45) unicode,
employee_type_id int,
foreign key (employee_type_id) references `employee_type`(id)
);
create table customer (
id int primary key auto_increment,
name varchar(45),
day_of_birth varchar(45),
phone_number varchar(45),
id_card varchar(45) unicode,
address varchar (225),
gender boolean,
is_deleted boolean,
email varchar(45) unique
);
create table aqua_type(
id int primary key auto_increment,
name varchar (45)
) ;
create table aqua_product (
id int primary key auto_increment,
image varchar(500),
name varchar(45),
prices double,
description varchar(500),
date_submitted date,
aqua_type_id int,
foreign key (aqua_type_id) references aqua_type(id)
);
create table `order` (
id int primary key auto_increment ,
code_oder varchar(45) unique,
date_purchase date ,
customer_id int ,
foreign key (customer_id) references customer(id)
);

create table `order_detail` (
id int primary key auto_increment ,
amount int,
aqua_product_id int,
order_id int,
foreign key (aqua_product_id) references aqua_product(id),
foreign key (order_id) references `order`(id)
);

create table role (
id int primary key auto_increment,
name varchar(25)
);
create table account(
id int primary key auto_increment,
employee_id int,
customer_id int,
password varchar(225),
foreign key (employee_id) references `employee`(id),
foreign key (customer_id) references `customer`(id)
);
create table account_role (
id int primary key auto_increment,
id_role int,
id_account int ,
foreign key (id_role) references `role`(id),
foreign key (id_account) references account(id)
);