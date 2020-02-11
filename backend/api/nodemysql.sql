-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 09, 2020 at 04:52 AM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodemysql`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `color`) VALUES
(8, 'Music Therapy', '#109bf2'),
(9, 'Group Session', '#b8e986'),
(10, 'Lessons', '#ff39cf'),
(11, '', '#a42121');

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
CREATE TABLE IF NOT EXISTS `clients` (
  `id` int(11) NOT NULL,
  `active` tinyint(5) DEFAULT NULL,
  `title` varchar(5) DEFAULT NULL,
  `client_full_name` varchar(45) DEFAULT NULL,
  `client_first_name` varchar(45) DEFAULT NULL,
  `client_last_name` varchar(45) DEFAULT NULL,
  `client_initials` varchar(45) DEFAULT NULL,
  `client_type` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `zip` varchar(45) DEFAULT NULL,
  `street_address` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `assi_therapist_full_name` varchar(45) DEFAULT NULL,
  `facility` varchar(45) DEFAULT NULL,
  `session_type` varchar(45) DEFAULT NULL,
  `session_cost` varchar(10) DEFAULT NULL,
  `session_length` double DEFAULT NULL,
  `bday` varchar(45) DEFAULT NULL,
  `notes` varchar(300) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `contact_title` varchar(45) DEFAULT NULL,
  `contact_first_name` varchar(45) DEFAULT NULL,
  `contact_last_name` varchar(45) DEFAULT NULL,
  `contact_street_address` varchar(45) DEFAULT NULL,
  `contact_city` varchar(45) DEFAULT NULL,
  `contact_state` varchar(45) DEFAULT NULL,
  `contact_zip` varchar(45) DEFAULT NULL,
  `contact_email` varchar(45) DEFAULT NULL,
  `contact_rec_email` tinyint(5) DEFAULT NULL,
  `contact_phone` varchar(45) DEFAULT NULL,
  `contact_sec_phone` varchar(45) DEFAULT NULL,
  `bill_same_as_contact` tinyint(5) DEFAULT NULL,
  `billing_first_name` varchar(45) DEFAULT NULL,
  `billing_last_name` varchar(45) DEFAULT NULL,
  `billing_full_name` varchar(45) DEFAULT NULL,
  `payment_type` varchar(45) DEFAULT NULL,
  `card_type` varchar(45) DEFAULT NULL,
  `card_num` varchar(45) DEFAULT NULL,
  `card_exp_date` varchar(45) DEFAULT NULL,
  `cvv` varchar(45) DEFAULT NULL,
  `billing_street_address` varchar(45) DEFAULT NULL,
  `name_on_card` varchar(45) DEFAULT NULL,
  `billing_city` varchar(45) DEFAULT NULL,
  `billing_state` varchar(45) DEFAULT NULL,
  `billing_email` varchar(45) DEFAULT NULL,
  `billing_phone` varchar(45) DEFAULT NULL,
  `billing_zip` varchar(45) DEFAULT NULL,
  `contact2_active` tinyint(5) DEFAULT NULL,
  `contact2_title` varchar(45) DEFAULT NULL,
  `contact2_first_name` varchar(45) DEFAULT NULL,
  `contact2_last_name` varchar(45) DEFAULT NULL,
  `contact2_street_address` varchar(45) DEFAULT NULL,
  `contact2_city` varchar(45) DEFAULT NULL,
  `contact2_state` varchar(45) DEFAULT NULL,
  `contact2_zip` varchar(45) DEFAULT NULL,
  `contact2_email` varchar(45) DEFAULT NULL,
  `contact2_rec_email` tinyint(5) DEFAULT NULL,
  `contact2_phone` varchar(45) DEFAULT NULL,
  `contact2_sec_phone` varchar(45) DEFAULT NULL,
  `contact3_active` tinyint(5) DEFAULT NULL,
  `contact3_title` varchar(45) DEFAULT NULL,
  `contact3_first_name` varchar(45) DEFAULT NULL,
  `contact3_last_name` varchar(45) DEFAULT NULL,
  `contact3_street_address` varchar(45) DEFAULT NULL,
  `contact3_city` varchar(45) DEFAULT NULL,
  `contact3_state` varchar(45) DEFAULT NULL,
  `contact3_zip` varchar(45) DEFAULT NULL,
  `contact3_email` varchar(45) DEFAULT NULL,
  `contact3_phone` varchar(45) DEFAULT NULL,
  `contact3_sec_phone` varchar(45) DEFAULT NULL,
  `addgoal1` tinyint(5) DEFAULT NULL,
  `goal1_active` tinyint(5) DEFAULT NULL,
  `goal1_desc` varchar(100) DEFAULT NULL,
  `obj1_1_desc` varchar(45) DEFAULT NULL,
  `obj1_2_desc` varchar(45) DEFAULT NULL,
  `obj1_3_desc` varchar(45) DEFAULT NULL,
  `addgoal2` tinyint(5) DEFAULT NULL,
  `goal2_active` tinyint(5) DEFAULT NULL,
  `goal2_desc` varchar(100) DEFAULT NULL,
  `obj2_1_desc` varchar(45) DEFAULT NULL,
  `obj2_2_desc` varchar(45) DEFAULT NULL,
  `obj2_3_desc` varchar(45) DEFAULT NULL,
  `addgoal3` tinyint(5) DEFAULT NULL,
  `goal3_active` tinyint(5) DEFAULT NULL,
  `goal3_desc` varchar(100) DEFAULT NULL,
  `obj3_1_desc` varchar(45) DEFAULT NULL,
  `obj3_2_desc` varchar(45) DEFAULT NULL,
  `obj3_3_desc` varchar(45) DEFAULT NULL,
  `addgoal4` tinyint(5) DEFAULT NULL,
  `goal4_active` tinyint(5) DEFAULT NULL,
  `goal4_desc` varchar(100) DEFAULT NULL,
  `obj4_1_desc` varchar(45) DEFAULT NULL,
  `obj4_2_desc` varchar(45) DEFAULT NULL,
  `obj4_3_desc` varchar(45) DEFAULT NULL,
  `addgoal5` tinyint(5) DEFAULT NULL,
  `goal5_active` tinyint(5) DEFAULT NULL,
  `goal5_desc` varchar(100) DEFAULT NULL,
  `obj5_1_desc` varchar(45) DEFAULT NULL,
  `obj5_2_desc` varchar(45) DEFAULT NULL,
  `obj5_3_desc` varchar(45) DEFAULT NULL,
  `addgoal6` tinyint(5) DEFAULT NULL,
  `goal6_active` tinyint(5) DEFAULT NULL,
  `goal6_desc` varchar(100) DEFAULT NULL,
  `obj6_1_desc` varchar(45) DEFAULT NULL,
  `obj6_2_desc` varchar(45) DEFAULT NULL,
  `obj6_3_desc` varchar(45) DEFAULT NULL,
  `addgoal7` tinyint(5) DEFAULT NULL,
  `goal7_active` tinyint(5) DEFAULT NULL,
  `goal7_desc` varchar(100) DEFAULT NULL,
  `obj7_1_desc` varchar(45) DEFAULT NULL,
  `obj7_2_desc` varchar(45) DEFAULT NULL,
  `obj7_3_desc` varchar(45) DEFAULT NULL,
  `addgoal8` tinyint(5) DEFAULT NULL,
  `goal8_active` tinyint(5) DEFAULT NULL,
  `goal8_desc` varchar(100) DEFAULT NULL,
  `obj8_1_desc` varchar(45) DEFAULT NULL,
  `obj8_2_desc` varchar(45) DEFAULT NULL,
  `obj8_3_desc` varchar(45) DEFAULT NULL,
  `addgoal9` tinyint(5) DEFAULT NULL,
  `goal9_active` tinyint(5) DEFAULT NULL,
  `goal9_desc` varchar(100) DEFAULT NULL,
  `obj9_1_desc` varchar(45) DEFAULT NULL,
  `obj9_2_desc` varchar(45) DEFAULT NULL,
  `obj9_3_desc` varchar(45) DEFAULT NULL,
  `addgoal10` tinyint(5) DEFAULT NULL,
  `goal10_active` tinyint(5) DEFAULT NULL,
  `goal10_desc` varchar(100) DEFAULT NULL,
  `obj10_1_desc` varchar(45) DEFAULT NULL,
  `obj10_2_desc` varchar(45) DEFAULT NULL,
  `obj10_3_desc` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`id`, `active`, `title`, `client_full_name`, `client_first_name`, `client_last_name`, `client_initials`, `client_type`, `phone`, `city`, `zip`, `street_address`, `email`, `assi_therapist_full_name`, `facility`, `session_type`, `session_cost`, `session_length`, `bday`, `notes`, `state`, `contact_title`, `contact_first_name`, `contact_last_name`, `contact_street_address`, `contact_city`, `contact_state`, `contact_zip`, `contact_email`, `contact_rec_email`, `contact_phone`, `contact_sec_phone`, `bill_same_as_contact`, `billing_first_name`, `billing_last_name`, `billing_full_name`, `payment_type`, `card_type`, `card_num`, `card_exp_date`, `cvv`, `billing_street_address`, `name_on_card`, `billing_city`, `billing_state`, `billing_email`, `billing_phone`, `billing_zip`, `contact2_active`, `contact2_title`, `contact2_first_name`, `contact2_last_name`, `contact2_street_address`, `contact2_city`, `contact2_state`, `contact2_zip`, `contact2_email`, `contact2_rec_email`, `contact2_phone`, `contact2_sec_phone`, `contact3_active`, `contact3_title`, `contact3_first_name`, `contact3_last_name`, `contact3_street_address`, `contact3_city`, `contact3_state`, `contact3_zip`, `contact3_email`, `contact3_phone`, `contact3_sec_phone`, `addgoal1`, `goal1_active`, `goal1_desc`, `obj1_1_desc`, `obj1_2_desc`, `obj1_3_desc`, `addgoal2`, `goal2_active`, `goal2_desc`, `obj2_1_desc`, `obj2_2_desc`, `obj2_3_desc`, `addgoal3`, `goal3_active`, `goal3_desc`, `obj3_1_desc`, `obj3_2_desc`, `obj3_3_desc`, `addgoal4`, `goal4_active`, `goal4_desc`, `obj4_1_desc`, `obj4_2_desc`, `obj4_3_desc`, `addgoal5`, `goal5_active`, `goal5_desc`, `obj5_1_desc`, `obj5_2_desc`, `obj5_3_desc`, `addgoal6`, `goal6_active`, `goal6_desc`, `obj6_1_desc`, `obj6_2_desc`, `obj6_3_desc`, `addgoal7`, `goal7_active`, `goal7_desc`, `obj7_1_desc`, `obj7_2_desc`, `obj7_3_desc`, `addgoal8`, `goal8_active`, `goal8_desc`, `obj8_1_desc`, `obj8_2_desc`, `obj8_3_desc`, `addgoal9`, `goal9_active`, `goal9_desc`, `obj9_1_desc`, `obj9_2_desc`, `obj9_3_desc`, `addgoal10`, `goal10_active`, `goal10_desc`, `obj10_1_desc`, `obj10_2_desc`, `obj10_3_desc`) VALUES
(1, 1, 'Mr.', 'Billy Joe', 'Billy', 'Joe', 'BJ', 'Individual', '123-444-5555', 'Plano', '75023', '123 Fake Street', 'bjoe@mail.com', 'Harry Potter', NULL, 'Therapy', '40', 60, '7/3/03', 'He is shy at first but will eventually open up0', 'TX', 'Mr.', 'Bob', 'Joe', '123 Apple Street', 'Plano', 'TX', '75023', 'bobjoe@mail.com', 0, '123-222-2222', NULL, 0, 'Bob', 'Joe', 'Bob Joe', 'Card', 'Visa', '11111111111', '10/25', '123', '123 Fake Street', 'Bob Joe', 'Plano', 'TX', 'bjoe@mail.com', '123-123-123', '75023', 1, 'Mrs.', 'Rachel', 'Joe', '123 Orange Street', 'Plano', 'TX', '75023', 'rjoe@mail.com', NULL, '555-444-3333', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 1, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL),
(2, 1, 'Miss', 'Sarah Silver', 'Sarah', 'Silver', 'SS', 'Facility', '123-222-3333', 'Allen', '75002', '444 Clark Drive', 'ssilver@mail.com', 'Lisa Simpson', 'Clark High School', 'Therapy', '20', 60, '6/3/00', NULL, 'TX', 'Ms.', 'Sarah', 'Silver', '432 Rose Road', 'Allen', 'TX', '75002', 'ssilver@mail.com', NULL, '555-555-5555', NULL, NULL, 'Sarah', 'Silver', 'Sarah Silver', 'Check', NULL, NULL, NULL, NULL, '432 Rose Road', NULL, 'Allen', 'TX', 'ssilver@mail.com', '111-111-1111', '34342', NULL, 'Mr.', 'Sam', 'Silver', '432 Rose Road', 'Allen', 'TX', '75002', 'samsilver@mail.com', NULL, '444-555-4444', NULL, NULL, 'Mx.', 'Alex', 'Silver', '200 Golden Avenue', 'Highland Park', 'TX', '75209', 'asilver@mail.com', '300-222-2222', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 1, 'Mr.', 'Jaren Jones', 'Jaren', 'Jones', 'JJ', 'Individual', '123-111-2232', 'Dallas', '75019', '234 Tree Street', 'jjones@mail.com', 'Harry Potter', NULL, 'Therapy', '20', 60, '5/7/05', NULL, 'TX', 'Mrs.', 'Peter', 'Jones', '1111 Ivy Lane', 'Dallas', 'TX', '75019', 'nname@mail.com', NULL, '777-777-7777', '888-888-8888', NULL, 'Ned', 'Jones', 'Ned Jones', 'Card', 'Discover', '3333333333', '2/23', '432', '1111 Lane', 'Ned E. Jones', 'Dallas', 'TX', 'ned@mail.com', '222-222-2222', '22424', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, 1, 'Mr.', 'Ian Stark', 'Ian', 'Stark', 'IS', 'Individual', '122-232-4444', 'Dallas', '75032', '645 Elm Ave', 'istark@mail.com', 'Jake Jakerson', NULL, 'Therapy', '20', 60, '8/2/01', NULL, 'TX', 'Mr.', 'Bill', 'Jakerson', '3214 Elm Court', 'Smithtown', 'TX', '75032', 'ffake@mail.com', NULL, '234-334-3444', '121-112-2222', NULL, 'Fred', 'Jakerson', 'Fred Jakerson', 'Check', NULL, NULL, NULL, NULL, '2343 Ave', NULL, 'Plano', 'TX', 'money@mail.com', '444-444-4444', '12345', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(5, 1, 'Mr.', 'Johnny Jackson', 'Johnny', 'Jackson', 'JJ', 'Facility', '122-222-1111', 'Frisco', '75068', '789 Tom Lane', 'johnjack@mail.com', 'Hermione Grainger', 'Thomas Elementary', 'Lessons', '20', 60, '9/6/12', NULL, 'TX', 'Mrs.', 'Tony', 'Stark', '4352 Imagine Lane', 'Austin', 'TX', '75068', 'jjackson@mail.com', NULL, '111-111-1111', NULL, NULL, 'Jill', 'Jackson', 'Jill Jackson', 'Cash', NULL, NULL, NULL, NULL, '5555 Lane', NULL, 'Frisco', 'TX', 'jilljackson@mail.com', '555-555-5544', '54321', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(70, 1, 'Mr.', 'Joe Jackson', 'Joe', 'Jackson', 'JJ', 'Facility', '122-222-1111', 'Frisco', '75068', '789 Tom Lane', 'joejack@mail.com', 'Hermione Grainger', 'Thomas Elementary', 'Lessons', '20', 60, '10/4/13', NULL, 'TX', 'Mrs.', 'Jill', 'Jackson', '4352 Imagine Lane', 'Austin', 'TX', '75068', 'jjackson@mail.com', NULL, '111-111-1111', NULL, NULL, 'Jill', 'Jackson', 'Jill Jackson', 'Cash', NULL, NULL, NULL, NULL, '5555 Lanr', NULL, 'Frisco', 'TX', 'jilljackson@mail.com', '555-555-5544', '54321', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(71, 1, 'Miss', 'Joan Jackson', 'Joan', 'Jackson', 'JJ', 'Facility', '122-222-1111', 'Frisco', '75068', '789 Tom Lane', 'joanjack@mail.com', 'Hermione Grainger', 'Thomas Elementary', 'Lessons', '20', 60, '1/4/15', NULL, 'TX', 'Mrs.', 'Jill', 'Jackson', '4352 Imagine Lane', 'Austin', 'TX', '75068', 'jjackson@mail.com', NULL, '111-111-1111', NULL, NULL, 'Jill', 'Jackson', 'Jill Jackson', 'Cash', NULL, NULL, NULL, NULL, NULL, NULL, 'Frisco', NULL, 'jilljackson@mail.com', '555-555-5544', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `invoices`
--

DROP TABLE IF EXISTS `invoices`;
CREATE TABLE IF NOT EXISTS `invoices` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` varchar(45) DEFAULT NULL,
  `inv_date` date DEFAULT NULL,
  `payor` varchar(45) DEFAULT NULL,
  `payor_first` varchar(45) DEFAULT NULL,
  `payor_last` varchar(45) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `amount` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `invoices`
--

INSERT INTO `invoices` (`id`, `status`, `inv_date`, `payor`, `payor_first`, `payor_last`, `start_date`, `end_date`, `amount`) VALUES
(1, 'Paid', '2019-09-10', 'JIll Jackson', 'Mary', 'Smith', '2019-08-10', '2019-09-09', '120'),
(2, 'Paid', '2019-10-10', 'Bob Joe', 'Jim', 'Adams', '2019-09-10', '2019-10-10', '80'),
(3, 'Paid', '2019-10-11', 'Sarah Silver', NULL, NULL, '2019-10-11', '2019-10-11', '40'),
(4, 'Paid', '2019-10-11', 'Ned Jones', NULL, NULL, '2019-10-01', '2019-10-31', '100'),
(5, NULL, '2019-10-11', 'Jiil Jackson', NULL, NULL, '2019-10-11', '2019-10-11', '200'),
(7, NULL, '2019-10-11', 'Fred Jakerson', NULL, NULL, '2019-10-11', '2019-10-11', '100'),
(8, NULL, '2019-10-22', 'Sarah Silver', NULL, NULL, '2019-09-22', '2019-10-22', '40'),
(9, NULL, '2019-11-19', 'Sarah Silver', NULL, NULL, '2019-10-19', '2019-11-19', '40'),
(10, NULL, '2019-11-19', 'Bob Joe', NULL, NULL, '2019-10-01', '2019-11-09', '80'),
(11, NULL, '2019-11-19', 'Fred Jakerson', NULL, NULL, '2019-10-01', '2019-11-09', '100');

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
CREATE TABLE IF NOT EXISTS `members` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `active` tinyint(5) DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `member_full_name` varchar(45) DEFAULT NULL,
  `member_first_name` varchar(45) DEFAULT NULL,
  `member_last_name` varchar(45) DEFAULT NULL,
  `member_initials` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `street_address` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `zip` varchar(45) DEFAULT NULL,
  `location` varchar(45) DEFAULT NULL,
  `clients` text,
  `bday` varchar(45) DEFAULT NULL,
  `npi` varchar(45) DEFAULT NULL,
  `notes` varchar(45) DEFAULT NULL,
  `role` varchar(45) DEFAULT NULL,
  `inv_billing` tinyint(5) DEFAULT NULL,
  `cal_every` tinyint(5) DEFAULT NULL,
  `view_other_clients` tinyint(5) DEFAULT NULL,
  `edit_other_sched` tinyint(5) DEFAULT NULL,
  `view_other_sched` tinyint(5) DEFAULT NULL,
  `edit_other_info` tinyint(5) DEFAULT NULL,
  `view_other_info` tinyint(5) DEFAULT NULL,
  `add_client` tinyint(5) DEFAULT NULL,
  `record_attendance` tinyint(5) DEFAULT NULL,
  `take_pay` tinyint(5) DEFAULT NULL,
  `view_note_hist` tinyint(5) DEFAULT NULL,
  `view_create_rep` tinyint(5) DEFAULT NULL,
  `view_own_cal` tinyint(5) DEFAULT NULL,
  `view_own_clients` tinyint(5) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`id`, `active`, `title`, `member_full_name`, `member_first_name`, `member_last_name`, `member_initials`, `email`, `phone`, `street_address`, `city`, `state`, `zip`, `location`, `clients`, `bday`, `npi`, `notes`, `role`, `inv_billing`, `cal_every`, `view_other_clients`, `edit_other_sched`, `view_other_sched`, `edit_other_info`, `view_other_info`, `add_client`, `record_attendance`, `take_pay`, `view_note_hist`, `view_create_rep`, `view_own_cal`, `view_own_clients`) VALUES
(1, 1, 'Dr.', 'Harry Potter', 'Harry', 'Potter', 'HP', 'hpotter@mail.com', '123-456-1111', '713 Hogwarts Lane', 'London', 'TX', '77777', 'Diagon Alley', '2,4', '01/1/1999', '6764876543', '', 'Administrator', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
(2, 1, 'Ms.', 'Hermione Grainger', 'Hermione', 'Grainger', 'HG', 'email@mail.com', '123-333-3333', '123 Fake Street', 'Plano', NULL, '75023', 'Wherever', 'Billy Joe,Jaren Jones,Johnny Jackson,Joe Jackson', '02/1/2002', '1242658633', NULL, 'Intern', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 1, 'Mr.', 'Joe Bob', 'Joe', 'Bob', 'JB', 'jbob@mail.com', '222-223-3333', '123 Street Lane', 'Frisco', NULL, '12345', 'Nowhere', NULL, '03/1/1999', '4356787654', NULL, 'Therapist', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, 1, 'Mr.', 'John Robinson', 'John', 'Robinson', 'JR', 'jrob@mail.com', '122-222-2222', '222 Nowhere', 'Allen', NULL, '12333', 'Somewhere', NULL, '04/1/2005', '1232456754', NULL, 'Administrator', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(5, 1, 'Dr', 'Lisa Simpson', 'Lisa', 'Simpson', 'LS', 'lsimpson@mail.com', '111-222-2222', '222 Evergreen Terrace', 'Springfield', NULL, '22244', 'Everywhere', NULL, '05/1/2001', '8675674321', NULL, 'Therapist', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(38, 1, 'Mr.', 'Jake Jakerson', 'Jake', 'Jakerson', 'JJ', 'jake@mail.com', '233-333-3333', '123 Jake Street', 'Jaketopia', NULL, '33333', 'Main Building', NULL, '05/12/1999', '6587776655', 'Jake has notes', 'Intern', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `templates`
--

DROP TABLE IF EXISTS `templates`;
CREATE TABLE IF NOT EXISTS `templates` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `template_name` varchar(45) DEFAULT NULL,
  `visible` varchar(3) DEFAULT NULL,
  `created` timestamp(6) NULL DEFAULT NULL,
  `sections` varchar(2000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `templates`
--

INSERT INTO `templates` (`id`, `template_name`, `visible`, `created`, `sections`) VALUES
(1, 'SOAP ', 'Yes', '2019-07-08 00:00:21.176000', '{\"s_note\":\"uhihikkjbn m ,   lkldsafdsf\",\"a_note\":\"sdfasdf\",\"o_note\":\"dsfasdf\",\"p_note\":\"s\"}'),
(2, 'Narrative', 'Yes', '2019-07-08 00:00:21.176000', '{\"narrativeNote\":\"dsafadsfasdfkjjhnkljljmlk;jljmlkjnm \"}'),
(3, 'Rating Scale', 'Yes', '2019-07-08 00:00:21.176000', '{\"rating1\":6,\"ratingDesc1\":\"sdfasdfas876y9878907\",\"rating2\":10,\"ratingDesc2\":\"sdafasdfas\",\"rating3\":10,\"ratingDesc3\":\"\",\"addRating2\":true,\"addRating3\":false}'),
(4, 'Percentage Scale', 'Yes', '2019-07-08 00:00:21.176000', '{\"first\":\"sdfasdfasd-980897uyjkb jmn\",\"scaleResult\":\"Consistent (>80%)\",\"second\":\"sdafasdfsaujhbjn.m,   lkjm;lkm\",\"scaleResult2\":\"Inconsistent (51-79%)\",\"third\":\"\",\"scaleResult3\":\"\",\"addScale2\":true,\"addScale3\":null}'),
(16, 'dfdsfdsfasdf', 'Yes', '2020-02-02 17:58:34.985000', '[{\"id\":\"c1c30d6ecb58d7f0a77f\",\"fields\":[{\"title\":\"dsfsda\",\"notes\":\"sdfasdfasdfasdfasdfdsfasdfds222222222222222\"}],\"type\":\"Textbox\"},{\"id\":\"b62a44a59a3cb217a103\",\"fields\":[{\"title\":\"dfsadfdasfa222\",\"value\":\"Consistent (>80%)\"}],\"type\":\"Percentage Scale\"},{\"id\":\"48d3ed1cc930e16702a1\",\"fields\":[{\"rating\":9,\"title\":\"sdfasdfasd222222\"}],\"type\":\"Rating Scale\"}]'),
(17, '222222222222222', 'Yes', '2020-02-08 23:39:09.063000', '[{\"id\":\"7ea6e832fab7bce2ea76\",\"fields\":[{\"title\":\"222222222222\",\"notes\":\"33333333333333333333\"}],\"type\":\"Textbox\"},{\"id\":\"4bc9e69b22c35da18b10\",\"fields\":[{\"title\":\"dddddddddddddd\",\"value\":\"Consistent (>80%)\"},{\"rating\":10,\"title\":\"sssssssssssssss\",\"value\":\"Inconsistent (51-79%)\"}],\"type\":\"Percentage Scale\"}]');

-- --------------------------------------------------------

--
-- Table structure for table `testevent`
--

DROP TABLE IF EXISTS `testevent`;
CREATE TABLE IF NOT EXISTS `testevent` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `bill_type` varchar(45) DEFAULT NULL,
  `client` varchar(45) DEFAULT NULL,
  `therapist` varchar(45) DEFAULT NULL,
  `start` datetime DEFAULT NULL,
  `end` datetime DEFAULT NULL,
  `location` varchar(45) DEFAULT NULL,
  `category` varchar(45) DEFAULT NULL,
  `type_note` int(11) DEFAULT NULL,
  `notes` text,
  `note_date` varchar(50) DEFAULT NULL,
  `attendance` varchar(30) DEFAULT NULL,
  `repeats` tinyint(5) DEFAULT NULL,
  `repeat_option` varchar(45) DEFAULT NULL,
  `end_repeat` varchar(45) DEFAULT NULL,
  `num_occurences` varchar(45) DEFAULT NULL,
  `end_date_occurrence` datetime DEFAULT NULL,
  `custom_frequency` varchar(45) DEFAULT NULL,
  `repeat_num_days` varchar(45) DEFAULT NULL,
  `sun` tinyint(5) DEFAULT NULL,
  `mon` tinyint(5) DEFAULT NULL,
  `tues` tinyint(5) DEFAULT NULL,
  `wed` tinyint(5) DEFAULT NULL,
  `thu` tinyint(5) DEFAULT NULL,
  `fri` tinyint(5) DEFAULT NULL,
  `sat` tinyint(5) DEFAULT NULL,
  `series_start_id` varchar(45) DEFAULT NULL,
  `billing_email` varchar(500) DEFAULT NULL,
  `email` varchar(500) DEFAULT NULL,
  `session_cost` double DEFAULT NULL,
  `session_set_length` double DEFAULT NULL,
  `event_date` datetime DEFAULT NULL,
  `payor` varchar(45) DEFAULT NULL,
  `transType` varchar(45) DEFAULT NULL,
  `amount` double DEFAULT NULL,
  `method` varchar(45) DEFAULT NULL,
  `trans_date` date DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `clients` text,
  `therapists` text,
  `clientsID` varchar(100) DEFAULT NULL,
  `therapistsID` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=10067 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `testevent`
--

INSERT INTO `testevent` (`id`, `title`, `bill_type`, `client`, `therapist`, `start`, `end`, `location`, `category`, `type_note`, `notes`, `note_date`, `attendance`, `repeats`, `repeat_option`, `end_repeat`, `num_occurences`, `end_date_occurrence`, `custom_frequency`, `repeat_num_days`, `sun`, `mon`, `tues`, `wed`, `thu`, `fri`, `sat`, `series_start_id`, `billing_email`, `email`, `session_cost`, `session_set_length`, `event_date`, `payor`, `transType`, `amount`, `method`, `trans_date`, `description`, `type`, `clients`, `therapists`, `clientsID`, `therapistsID`) VALUES
(10, '', 'Billable', '', '', '2019-10-20 09:00:00', '2019-10-20 10:00:00', '', '', NULL, NULL, NULL, NULL, 1, 'Weekly', 'On Date', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '888', 'bjoe@mail.com', NULL, 20, 60, '2019-10-20 09:00:00', NULL, 'Calendar', 0, NULL, '2019-10-20', 'Session with Harry Potter', NULL, 'Billy Joe', 'Harry Potter', NULL, NULL),
(888, '', 'Billable', '', '', '2019-11-01 09:00:00', '2019-11-01 10:00:00', '', '', NULL, NULL, NULL, 'Present ($)', 1, 'Weekly', 'On Date', '', '2019-11-29 00:00:00', '', '', 0, 0, 0, 0, 0, 0, 0, '888', 'bjoe@mail.com', NULL, 20, 60, '2019-11-01 09:00:00', NULL, 'Calendar', 0, NULL, '2019-11-01', 'Session with Harry Potter', NULL, 'Billy Joe', 'Harry Potter', NULL, NULL),
(889, '', 'Billable', '', '', '2019-11-08 09:00:00', '2019-11-08 10:00:00', '', '', NULL, NULL, NULL, 'Present ($)', 1, 'Weekly', 'On Date', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '888', 'bjoe@mail.com', NULL, 20, 60, '2019-11-08 09:00:00', NULL, 'Calendar', 0, NULL, '2019-11-08', 'Session with Harry Potter', NULL, 'Billy Joe', 'Harry Potter', NULL, NULL),
(890, '', 'Billable', '', '', '2019-11-15 09:00:00', '2019-11-15 10:00:00', '', '', NULL, NULL, NULL, 'Absent, no notice ($)', 1, 'Weekly', 'On Date', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '888', 'bjoe@mail.com', NULL, 20, 60, '2019-11-15 09:00:00', NULL, 'Calendar', 0, NULL, '2019-11-15', 'Session with Harry Potter', NULL, 'Billy Joe', 'Harry Potter', NULL, NULL),
(891, '', 'Billable', '', '', '2019-11-22 09:00:00', '2019-11-22 10:00:00', '', '', NULL, NULL, NULL, NULL, 1, 'Weekly', 'On Date', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '888', 'bjoe@mail.com', NULL, 20, 60, '2019-11-22 09:00:00', NULL, 'Calendar', 0, NULL, '2019-11-22', 'Session with Harry Potter', NULL, 'Billy Joe', 'Harry Potter', NULL, NULL),
(892, '', 'Billable', '', '', '2019-11-29 09:00:00', '2019-11-29 10:00:00', '', '', NULL, NULL, NULL, NULL, 1, 'Weekly', 'On Date', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '888', 'bjoe@mail.com', NULL, 20, 60, '2019-11-29 09:00:00', NULL, 'Calendar', 0, NULL, '2019-11-29', 'Session with Harry Potter', NULL, 'Billy Joe', 'Harry Potter', NULL, NULL),
(893, '', '', '', '', '2019-11-10 08:30:00', '2019-11-10 09:00:00', '', '', NULL, NULL, NULL, 'Present ($)', 0, 'false', '', '', '2019-11-21 00:00:00', '', '', 0, 0, 0, 0, 0, 0, 0, '893', '', NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Jaren Jones,Ian Stark', 'Harry Potter', NULL, NULL),
(894, '', 'Billable', '', '', '2019-11-04 09:00:00', '2019-11-04 10:00:00', '', '#109bf2', NULL, NULL, NULL, 'Present ($)', 1, 'Weekly', 'On Date', '', '2019-12-02 00:00:00', '', '', 0, 0, 0, 0, 0, 0, 0, '894', 'ssilver@mail.com', NULL, 20, 60, '2019-11-04 00:00:00', NULL, 'Calendar', 0, NULL, NULL, 'Session with Hermione Grainger', NULL, 'Sarah Silver', 'Hermione Grainger', NULL, NULL),
(895, '', 'Billable', '', '', '2019-11-11 09:00:00', '2019-11-11 10:00:00', '', '#109bf2', NULL, NULL, NULL, 'Present ($)', 1, 'Weekly', 'On Date', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '894', 'ssilver@mail.com', NULL, 20, 60, '2019-11-04 00:00:00', NULL, 'Calendar', 0, NULL, NULL, 'Session with Hermione Grainger', NULL, 'Sarah Silver', 'Hermione Grainger', NULL, NULL),
(896, '', 'Billable', '', '', '2019-11-18 09:00:00', '2019-11-18 10:00:00', '', '#109bf2', NULL, NULL, NULL, NULL, 1, 'Weekly', 'On Date', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '894', 'ssilver@mail.com', NULL, 20, 60, '2019-11-04 00:00:00', NULL, 'Calendar', 0, NULL, NULL, 'Session with Hermione Grainger', NULL, 'Sarah Silver', 'Hermione Grainger', NULL, NULL),
(897, '', 'Billable', '', '', '2019-11-25 09:00:00', '2019-11-25 10:00:00', '', '#109bf2', NULL, NULL, NULL, NULL, 1, 'Weekly', 'On Date', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '894', 'ssilver@mail.com', NULL, 20, 60, '2019-11-04 00:00:00', NULL, 'Calendar', 0, NULL, NULL, 'Session with Hermione Grainger', NULL, 'Sarah Silver', 'Hermione Grainger', NULL, NULL),
(898, '', 'Billable', '', '', '2019-12-02 09:00:00', '2019-12-02 10:00:00', '', '#109bf2', NULL, NULL, NULL, 'Absent, no notice ($)', 1, 'Weekly', 'On Date', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '894', 'ssilver@mail.com', NULL, 20, 60, '2019-11-04 00:00:00', NULL, 'Calendar', 0, NULL, NULL, 'Session with Hermione Grainger', NULL, 'Sarah Silver', 'Hermione Grainger', NULL, NULL),
(899, '', 'Billable', '', '', '2019-11-04 09:00:00', '2019-11-04 10:00:00', '', '#ff39cf', NULL, NULL, NULL, 'Absent, notice', 1, 'Custom', 'On Date', '', '2019-11-17 00:00:00', 'Specific Days', '', 0, 1, 0, 1, 0, 0, 0, '899', 'jilljackson@mail.com', NULL, 20, 60, '2019-11-04 09:00:00', NULL, 'Calendar', 0, NULL, NULL, 'Session with Hermione Grainger', NULL, 'John Jackson', 'Hermione Grainger', NULL, NULL),
(900, '', 'Billable', '', '', '2019-11-06 09:00:00', '2019-11-06 10:00:00', '', '#ff39cf', NULL, NULL, NULL, 'Absent, no notice ($)', 1, 'Custom', 'On Date', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '899', 'jilljackson@mail.com', NULL, 20, 60, '2019-11-06 09:00:00', NULL, 'Calendar', 0, NULL, NULL, 'Session with Hermione Grainger', NULL, 'John Jackson', 'Hermione Grainger', NULL, NULL),
(901, '', 'Billable', '', '', '2019-11-11 09:00:00', '2019-11-11 10:00:00', '', '#ff39cf', NULL, NULL, NULL, NULL, 1, 'Custom', 'On Date', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '899', 'jilljackson@mail.com', NULL, 20, 60, '2019-11-11 09:00:00', NULL, 'Calendar', 0, NULL, NULL, 'Session with Hermion Grainger', NULL, 'John Jackson', 'Hermione Grainger', NULL, NULL),
(902, '', 'Billable', '', '', '2019-11-13 09:00:00', '2019-11-13 10:00:00', '', '#ff39cf', NULL, 'hh', NULL, 'Present ($)', 1, 'Custom', 'On Date', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '899', 'jilljackson@mail.com', NULL, 20, 60, '2019-11-13 09:00:00', NULL, 'Calendar', 0, NULL, NULL, 'Session with Hermione Grainger', NULL, 'John Jackson', 'Hermione Grainger', NULL, NULL),
(904, '', 'Billable', '', '', '2019-11-19 14:00:00', '2019-11-19 15:00:00', '', '', NULL, NULL, NULL, 'Absent, notice', 0, '', '', '', '2019-11-21 00:00:00', '', '', 0, 0, 0, 0, 0, 0, 0, '904', '', NULL, 0, 0, '2019-11-19 14:00:00', NULL, 'Calendar', NULL, NULL, NULL, 'Session with Jennifer Robinson', NULL, 'Jaren Jones', 'Jennifer Robinson', NULL, NULL),
(905, '', 'Billable', '', '', '2019-11-08 09:00:00', '2019-11-08 10:00:00', '', '', NULL, NULL, NULL, 'Absent, no notice ($)', 1, 'Weekly', 'On Date', '', '2019-11-30 00:00:00', '', '', 0, 0, 0, 0, 0, 0, 0, '905', '', NULL, 0, 0, '2019-11-08 09:00:00', NULL, 'Calendar', NULL, NULL, NULL, 'Session with Joe Bob', NULL, 'Jaren Jones', 'Joe Bob', NULL, NULL),
(906, '', 'Billable', '', '', '2019-11-15 09:00:00', '2019-11-15 10:00:00', '', '', NULL, NULL, NULL, 'Present ($)', 1, 'Weekly', 'On Date', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '905', '', NULL, 0, 0, '2019-11-15 09:00:00', NULL, 'Calendar', NULL, NULL, NULL, 'Session with Joe Bob', NULL, 'Jaren Jones', 'Joe Bob', NULL, NULL),
(907, '', 'Billable', '', '', '2019-11-22 09:00:00', '2019-11-22 10:00:00', '', '', NULL, 'm m', NULL, 'Present ($)', 1, 'Weekly', 'On Date', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '905', '', NULL, 0, 0, '2019-11-22 09:00:00', NULL, 'Calendar', NULL, NULL, NULL, 'Session with Joe Bob', NULL, 'Jaren Jones', 'Joe Bob', NULL, NULL),
(908, '', 'Billable', '', '', '2019-11-29 09:00:00', '2019-11-29 10:00:00', '', '', NULL, NULL, NULL, NULL, 1, 'Weekly', 'On Date', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '905', '', NULL, 0, 0, '2019-11-29 09:00:00', NULL, 'Calendar', NULL, NULL, NULL, 'Session with Joe Bob', NULL, 'Jaren Jones', 'Joe Bob', NULL, NULL),
(909, '', 'Billable', '', '', '2019-11-21 14:00:00', '2019-11-21 15:00:00', '', '#109bf2', NULL, NULL, NULL, NULL, 1, 'Weekly', 'After', '3', '2019-11-21 00:00:00', '', '', 0, 0, 0, 0, 0, 0, 0, '909', 'istark@mail.com', NULL, 20, 60, '2019-11-21 14:00:00', NULL, 'Calendar', 0, NULL, NULL, 'Session with Joe Bob', NULL, 'Ian Stark', 'Joe Bob', NULL, NULL),
(910, '', 'Billable', '', '', '2019-11-28 14:00:00', '2019-11-28 15:00:00', '', '#109bf2', NULL, NULL, NULL, NULL, 1, 'Weekly', 'After', '3', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '909', 'istark@mail.com', NULL, 20, 60, '2019-11-28 14:00:00', NULL, 'Calendar', 0, NULL, NULL, 'Session with Joe Bob', NULL, 'Ian Stark', 'Joe Bob', NULL, NULL),
(911, '', 'Billable', '', '', '2019-12-05 14:00:00', '2019-12-05 15:00:00', '', '#109bf2', NULL, NULL, NULL, 'Absent, no notice ($)', 1, 'Weekly', 'After', '3', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '909', 'istark@mail.com', NULL, 20, 60, '2019-12-05 14:00:00', NULL, 'Calendar', 0, NULL, NULL, 'Session with Joe Bob', NULL, 'Ian Stark', 'Joe Bob', NULL, NULL),
(912, '', 'Billable', '', '', '2019-11-21 14:00:00', '2019-11-21 15:00:00', '', '', NULL, NULL, NULL, NULL, 1, 'Weekly', 'After', '3', '2019-11-21 00:00:00', '', '', 0, 0, 0, 0, 0, 0, 0, '912', '', NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Joe Jackson', 'Hermione Grainger', NULL, NULL),
(913, '', 'Billable', '', '', '2019-11-28 14:00:00', '2019-11-28 15:00:00', '', '', NULL, NULL, NULL, NULL, 1, 'Weekly', 'After', '3', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '912', '', NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Joe Jackson', 'Hermione Grainger', NULL, NULL),
(914, '', 'Billable', '', '', '2019-12-05 14:00:00', '2019-12-05 15:00:00', '', '', NULL, NULL, NULL, NULL, 1, 'Weekly', 'After', '3', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '912', '', NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Joe Jackson', 'Hermione Grainger', NULL, NULL),
(915, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(918, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'bjoe@mail.com', NULL, 0, NULL, '2019-11-21 00:00:00', 'Bob Joe', 'Payment', 1000, 'Cash', '2019-11-21', 'Payment', NULL, NULL, NULL, NULL, NULL),
(920, '', 'Billable', '', '', '2019-11-21 15:20:00', '2019-11-21 15:52:00', '', '#b8e986', NULL, NULL, NULL, 'Present ($)', 0, 'false', '', '', '2019-11-21 00:00:00', '', '', 0, 0, 0, 0, 0, 0, 0, '920', 'jilljackson@mail.com', NULL, 20, 60, '2019-11-21 15:20:00', NULL, 'Calendar', 0, NULL, NULL, 'Session with Hermione Grainger', NULL, 'John Jackson', 'Hermione Grainger', NULL, NULL),
(937, '', '', '', '', '2019-11-24 10:30:00', '2019-11-24 11:30:00', '', '', NULL, 'ddd', NULL, 'Absent, no notice ($)', 0, 'false', '', '', '2019-11-24 00:00:00', '', '', 0, 0, 0, 0, 0, 0, 0, '937', '', NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Sarah Silver', 'Hermione Grainger', NULL, NULL),
(938, '', 'Billable', '', '', '2019-11-24 10:30:00', '2019-11-24 11:30:00', '', '', NULL, 'vv', NULL, 'Absent, notice', 0, '', '', '', '2019-11-24 00:00:00', '', '', 0, 0, 0, 0, 0, 0, 0, '938', '', NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Jaren Jones', 'Hermione Grainger', NULL, NULL),
(939, '', 'Billable', '', '', '2019-11-24 09:30:00', '2019-11-24 10:30:00', '', '', NULL, 'ss', NULL, 'Present ($)', 0, '', '', '', '2019-11-24 00:00:00', '', '', 0, 0, 0, 0, 0, 0, 0, '939', '', NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Sarah Silver', 'Hermione Grainger', NULL, NULL),
(984, '', 'Billable', '', '', '2019-12-10 17:10:00', '2019-12-10 18:10:00', '', '', NULL, NULL, NULL, 'Present ($)', 1, 'Daily', 'After', '3', '2019-12-10 00:00:00', '', '', 0, 0, 0, 0, 0, 0, 0, '984', '', NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Sarah Silver', 'Hermione Grainger', NULL, NULL),
(985, '', 'Billable', '', '', '2019-12-11 17:10:00', '2019-12-11 18:10:00', '', '', NULL, NULL, NULL, 'Absent, no notice ($)', 1, 'Daily', 'After', '3', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '984', '', NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Sarah Silver', 'Hermione Grainger', NULL, NULL),
(986, '', 'Billable', '', '', '2019-12-12 17:10:00', '2019-12-12 18:10:00', '', '', NULL, NULL, NULL, 'Absent, notice', 1, 'Daily', 'After', '3', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '984', '', NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Sarah Silver', 'Hermione Grainger', NULL, NULL),
(10006, '', 'Billable', '', '', '2019-12-27 14:48:00', '2019-12-27 15:48:00', 'ttt', '#109bf2', NULL, 'bhbhb', '2019-12-28 00:00:00', 'Present ($)', 0, 'null', 'null', 'null', '2019-12-27 00:00:00', '', 'null', 0, 0, 0, 0, 0, 0, 0, '10006', '', NULL, 0, 0, NULL, NULL, 'Calendar', NULL, NULL, '2019-12-27', NULL, NULL, 'Billy Joe', 'Hermione Grainger', NULL, NULL),
(10019, '', 'Billable', '', '', '2020-01-23 06:30:00', '2020-01-23 07:00:00', 'dsfasdfdsfadsf', '#b8e986', NULL, NULL, NULL, NULL, 0, 'false', '', '', '2020-01-23 00:00:00', '', '', 0, 0, 0, 0, 0, 0, 0, '10019', '', NULL, 0, 0, NULL, NULL, 'Calendar', NULL, NULL, '2020-01-23', NULL, NULL, 'Sarah Silver', 'Hermione Grainger', NULL, NULL),
(10020, '', 'Billable', '', '', '2020-01-24 00:31:00', '2020-01-24 01:31:00', 'asfddsfsd', '#b8e986', NULL, NULL, NULL, NULL, 0, 'false', '', '', '2020-01-24 00:00:00', '', '', 0, 0, 0, 0, 0, 0, 0, '10020', '', NULL, 0, 0, NULL, NULL, 'Calendar', NULL, NULL, '2020-01-24', NULL, NULL, 'Sarah Silver', 'Harry Potter', NULL, NULL),
(10026, '', 'Billable', '', '', '2020-01-25 14:53:00', '2020-01-25 15:53:00', '', '', NULL, NULL, NULL, NULL, 0, 'false', '', '', '2020-01-25 00:00:00', '', '', 0, 0, 0, 0, 0, 0, 0, '10026', '', NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Sarah Silver', 'Joe Bob', NULL, NULL),
(10039, '', 'Billable', '', '', '2020-01-30 02:00:00', '2020-01-30 03:00:00', 'sdfsdafasdfdddddd', '#b8e986', NULL, 'aaaaaaaaaaaaaaaaaaaaaaaaadsfasdf', NULL, 'Present ($)', 0, '', '', '', '2020-01-30 00:00:00', '', '', 0, 0, 0, 0, 0, 0, 0, '10039', '', NULL, 0, 0, NULL, NULL, 'Calendar', NULL, NULL, '2020-01-30', NULL, NULL, '', '', NULL, NULL),
(10041, '', 'Non-billable', '', '', '2020-01-24 00:36:00', '2020-01-13 02:36:00', 'dfgtrdgh', '#ff39cf', NULL, NULL, NULL, NULL, 0, '', '', '', '2020-01-24 00:00:00', '', '', 0, 0, 0, 0, 0, 0, 0, '10041', '', NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Sarah Silver,Johnny Jackson', '', NULL, NULL),
(10046, '', 'Billable', '', '', '2020-01-31 01:18:00', '2020-01-31 02:18:00', 'cvx', '#b8e986', NULL, NULL, NULL, NULL, 0, 'false', '', '', '2020-01-31 00:00:00', '', '', 0, 0, 0, 0, 0, 0, 0, '10046', '', NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Sarah Silver,Johnny Jackson,Joan Jackson', 'Joe Bob,Hermione Grainger,Lisa Simpson', NULL, NULL),
(10062, '', 'Billable', '', '', '2020-02-04 08:27:00', '2020-02-04 09:27:00', 'ddddd', '#109bf2', 16, '[{\"id\":\"c1c30d6ecb58d7f0a77f\",\"fields\":[{\"title\":\"55555555555555555dsfsda\",\"notes\":\"sdfasdfasdfasdfasdfdsfasdfds222222222222222\"}],\"type\":\"Textbox\"},{\"id\":\"b62a44a59a3cb217a103\",\"fields\":[{\"title\":\"dfsadfdasfa222\",\"value\":\"Consistent (>80%)\"}],\"type\":\"Percentage Scale\"},{\"id\":\"48d3ed1cc930e16702a1\",\"fields\":[{\"rating\":9,\"title\":\"sdfasdfasd222222\"}],\"type\":\"Rating Scale\"}]', '2020-02-09T04:46:07.831Z', NULL, 0, 'false', '', '', '2020-02-04 08:27:00', '', '', 0, 0, 0, 0, 0, 0, 0, '10062', 'ssilver@mail.com,johnjack@mail.com', 'email@mail.com,lsimpson@mail.com', 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Sarah Silver,Johnny Jackson', 'Hermione Grainger,Lisa Simpson', '2,5', '2,5'),
(10063, '', 'Billable', '', '', '2020-02-04 08:27:00', '2020-02-05 09:27:00', 'ddddffff', '#109bf2', 3, '{\"rating1\":6,\"ratingDesc1\":\"sdfasdfas876y9878907\",\"rating2\":10,\"ratingDesc2\":\"sdafasdfas\",\"rating3\":10,\"ratingDesc3\":\"\",\"addRating2\":true,\"addRating3\":false}', '2020-02-09T04:44:04.456Z', NULL, 0, '', '', '', '2020-02-04 08:27:00', '', '', 0, 0, 0, 0, 0, 0, 0, '10063', 'ssilver@mail.com,istark@mail.com,joanjack@mail.com', 'jbob@mail.com,lsimpson@mail.com', 0, 0, NULL, NULL, 'Calendar', NULL, NULL, '2020-02-05', NULL, NULL, 'Sarah Silver,Ian Stark,Joan Jackson,Joe Jackson,Johnny Jackson', 'Joe Bob,Lisa Simpson,Harry Potter', '2,4,71', '3,5'),
(10066, '', 'Billable', '', '', '2020-02-04 08:50:00', '2020-02-06 09:50:00', 'dfasdf', '#109bf2', NULL, NULL, NULL, NULL, 0, 'false', '', '', '2020-02-04 08:50:00', '', '', 0, 0, 0, 0, 0, 0, 0, '10066', 'ssilver@mail.com,istark@mail.com,joejack@mail.com', 'email@mail.com,jrob@mail.com,lsimpson@mail.com', 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Sarah Silver,Ian Stark,Joe Jackson', 'Hermione Grainger,John Robinson,Lisa Simpson', '2,4,70', '2,4,5');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
