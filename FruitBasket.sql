CREATE TABLE Users (
User_ID varchar(6) NOT NULL PRIMARY KEY,
User_Name varchar(30),
First_Name varchar(50),
Last_Name varchar(50),
Bio varchar(500),
User_Password varchar(20) NOT NULL,
User_Email varchar(50),
Phone_Number varchar(15),
Date_of_Birth date NOT NULL,
Number_of_Matches int,
Number_of_Baskets int,
City varchar(50),
Age int NOT NULL,
Preference_ID varchar(6)
);

CREATE TABLE Baskets (
Basket_ID varchar(6) NOT NULL PRIMARY KEY,
Basket_Name varchar(50),
Number_of_Members int,
Date_of_Creation date,
Reason_for_Basket varchar(50),
Min_Members int,
Max_Members int
);

CREATE TABLE Preferences (
Preference_ID varchar(6) NOT NULL PRIMARY KEY,
Distance_Min int,
Distance_Max int,
Relationship_Type varchar(50),
Age_Min int,
Age_Max int
);

CREATE TABLE User_Profiles(
Profile_ID varchar(6) NOT NULL PRIMARY KEY,
Picture_ID varchar(6),
Date_of_Birth date,
Age int,
Username varchar(30),
City varchar(50),
Interest_ID varchar(6),
Video_ID varchar(6)
);

CREATE TABLE Pictures(
Picture_ID varchar(6) NOT NULL PRIMARY KEY
);

CREATE TABLE Interests(
Interest_ID varchar(6) NOT NULL PRIMARY KEY,
Interest_Name varchar(50) NOT NULL,
Interest_Description varchar(500)
);

CREATE TABLE Videos(
Video_ID varchar(6) NOT NULL PRIMARY KEY
);

CREATE TABLE Matches(
Match_ID varchar(6) NOT NULL PRIMARY KEY,
User_ID varchar(6),
Interest_in_Basket boolean
);