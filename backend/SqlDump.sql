
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (8,'Music Therapy','#80cbc4'),(9,'Group Session','#b8e986'),(10,'Lessons','#ff39cf');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `active` tinyint(5) DEFAULT NULL,
  `org` varchar(45) DEFAULT NULL,
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients`
--

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
INSERT INTO `clients` VALUES (1,1,'Hogwarts','Mr.','Billy Joe','Billy','Joe','BJ','Individual','123-444-5555','Plano','75023','123 Fake Street','bjoe@mail.com','Harry Potter',NULL,'Therapy','40',60,'7/3/03','He is shy at first but will eventually open up0','TX','Mr.','Bob','Joe','123 Apple Street','Plano','TX','75023','bobjoe@mail.com',0,'123-222-2222',NULL,0,'Bob','Joe','Bob Joe','Card','Visa','11111111111','10/25','123','123 Fake Street','Bob Joe','Plano','TX','bjoe@mail.com','123-123-123','75023',1,'Mrs.','Rachel','Joe','123 Orange Street','Plano','TX','75023','rjoe@mail.com',NULL,'555-444-3333',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,NULL,NULL,NULL,NULL,0,0,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL),(2,1,'Hogwarts','Miss','Sarah Silver','Sarah','Silver','SS','Facility','123-222-3333','Allen','75002','444 Clark Drive','ssilver@mail.com','Lisa Simpson','Clark High School','Therapy','20',60,'6/3/00',NULL,'TX','Ms.','Sarah','Silver','432 Rose Road','Allen','TX','75002','ssilver@mail.com',NULL,'555-555-5555',NULL,NULL,'Sarah','Silver','Sarah Silver','Check',NULL,NULL,NULL,NULL,'432 Rose Road',NULL,'Allen','TX','ssilver@mail.com','111-111-1111','34342',NULL,'Mr.','Sam','Silver','432 Rose Road','Allen','TX','75002','samsilver@mail.com',NULL,'444-555-4444',NULL,NULL,'Mx.','Alex','Silver','200 Golden Avenue','Highland Park','TX','75209','asilver@mail.com','300-222-2222',NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,1,'Hogwarts','Mr.','Jaren Jones','Jaren','Jones','JJ','Individual','123-111-2232','Dallas','75019','234 Tree Street','jjones@mail.com','Harry Potter',NULL,'Therapy','20',60,'5/7/05',NULL,'TX','Mrs.','Peter','Jones','1111 Ivy Lane','Dallas','TX','75019','nname@mail.com',NULL,'777-777-7777','888-888-8888',NULL,'Ned','Jones','Ned Jones','Card','Discover','3333333333','2/23','432','1111 Lane','Ned E. Jones','Dallas','TX','ned@mail.com','222-222-2222','22424',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(4,1,'Oz','Mr.','Ian Stark','Ian','Stark','IS','Individual','122-232-4444','Dallas','75032','645 Elm Ave','istark@mail.com','Jake Jakerson',NULL,'Therapy','20',60,'8/2/01',NULL,'TX','Mr.','Bill','Jakerson','3214 Elm Court','Smithtown','TX','75032','ffake@mail.com',NULL,'234-334-3444','121-112-2222',NULL,'Fred','Jakerson','Fred Jakerson','Check',NULL,NULL,NULL,NULL,'2343 Ave',NULL,'Plano','TX','money@mail.com','444-444-4444','12345',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(5,1,'Oz','Mr.','Johnny Jackson','Johnny','Jackson','JJ','Facility','122-222-1111','Frisco','75068','789 Tom Lane','johnjack@mail.com','Hermione Grainger','Thomas Elementary','Lessons','20',60,'9/6/12',NULL,'TX','Mrs.','Tony','Stark','4352 Imagine Lane','Austin','TX','75068','jjackson@mail.com',NULL,'111-111-1111',NULL,NULL,'Jill','Jackson','Jill Jackson','Cash',NULL,NULL,NULL,NULL,'5555 Lane',NULL,'Frisco','TX','jilljackson@mail.com','555-555-5544','54321',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(70,1,'Oz','Mr.','Joe Jackson','Joe','Jackson','JJ','Facility','122-222-1111','Frisco','75068','789 Tom Lane','joejack@mail.com','Hermione Grainger','Thomas Elementary','Lessons','20',60,'10/4/13',NULL,'TX','Mrs.','Jill','Jackson','4352 Imagine Lane','Austin','TX','75068','jjackson@mail.com',NULL,'111-111-1111',NULL,NULL,'Jill','Jackson','Jill Jackson','Cash',NULL,NULL,NULL,NULL,'5555 Lanr',NULL,'Frisco','TX','jilljackson@mail.com','555-555-5544','54321',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(71,1,'Oz','Miss','Joan Jackson','Joan','Jackson','JJ','Facility','122-222-1111','Frisco','75068','789 Tom Lane','joanjack@mail.com','Hermione Grainger','Thomas Elementary','Lessons','20',60,'1/4/15',NULL,'TX','Mrs.','Jill','Jackson','4352 Imagine Lane','Austin','TX','75068','jjackson@mail.com',NULL,'111-111-1111',NULL,NULL,'Jill','Jackson','Jill Jackson','Cash',NULL,NULL,NULL,NULL,NULL,NULL,'Frisco',NULL,'jilljackson@mail.com','555-555-5544',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `documents`
--

DROP TABLE IF EXISTS `documents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `documents` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `event_id` int(11) DEFAULT NULL,
  `client_id` int(11) DEFAULT NULL,
  `note_date` datetime DEFAULT NULL,
  `attendance` varchar(30) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `notes` varchar(5000) DEFAULT NULL,
  `email` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `event_client` (`event_id`,`client_id`),
  KEY `client` (`client_id`),
  CONSTRAINT `client` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`),
  CONSTRAINT `event` FOREIGN KEY (`event_id`) REFERENCES `testevent` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documents`
--

LOCK TABLES `documents` WRITE;
/*!40000 ALTER TABLE `documents` DISABLE KEYS */;
INSERT INTO `documents` VALUES (52,10358,5,'2020-04-16 12:00:34','Present ($)',2,'{\"narrativeNote\":\"Johnny was present\"}',NULL),(53,10358,3,'2020-04-16 12:00:53','Absent, no notice ($)',1,'{\"s_note\":\"Jaren \",\"o_note\":\"was\",\"a_note\":\"absent\",\"p_note\":\"!\"}',NULL),(54,10357,2,'2020-04-16 12:01:17','Present ($)',2,'{\"narrativeNote\":\"Sarah was great!\"}',NULL),(55,10357,3,'2020-04-16 12:01:28','Present ($)',2,'{\"narrativeNote\":\"Jaren was much better this time!\"}',NULL),(56,10401,4,'2020-04-16 12:03:14','Present ($)',2,'{\"narrativeNote\":\"Ian was great!\"}',NULL),(57,10402,4,'2020-04-16 12:03:38','Present ($)',2,'{\"narrativeNote\":\"Ian struggled during the 4/6 session\"}',NULL),(63,10389,1,'2020-04-17 12:26:44','Present ($)',2,'{\"narrativeNote\":\"\"}',NULL),(64,10389,71,'2020-04-17 12:26:48','Absent, notice',2,'{\"narrativeNote\":\"\"}',NULL),(65,10388,1,'2020-04-17 13:58:10','Absent, notice',2,'{\"narrativeNote\":\"\"}',NULL),(66,10388,71,'2020-04-17 13:58:13','Absent, no notice ($)',2,'{\"narrativeNote\":\"\"}',NULL),(67,10390,1,'2020-04-17 14:01:35','Absent, notice',2,'{\"narrativeNote\":\"here is a note\"}',NULL),(68,10390,71,'2020-04-17 14:01:47','Absent, no notice ($)',2,'{\"narrativeNote\":\"here is another note\"}',NULL),(69,10391,1,'2020-04-17 13:59:28','Present ($)',2,'{\"narrativeNote\":\"\"}',NULL),(70,10391,71,'2020-04-17 13:59:30','Present ($)',2,'{\"narrativeNote\":\"\"}',NULL),(71,10392,1,'2020-04-21 19:44:03','Absent, no notice ($)',2,'{\"narrativeNote\":\"here!\"}',NULL),(72,10392,71,'2020-04-21 19:44:01','Absent, no notice ($)',2,'{\"narrativeNote\":\"no notice \"}',NULL);
/*!40000 ALTER TABLE `documents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoices`
--

DROP TABLE IF EXISTS `invoices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `invoices` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` varchar(45) DEFAULT NULL,
  `inv_date` date DEFAULT NULL,
  `payor` varchar(45) DEFAULT NULL,
  `payor_first` varchar(45) DEFAULT NULL,
  `payor_last` varchar(45) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `amount` varchar(45) DEFAULT NULL,
  `billing_email` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoices`
--

LOCK TABLES `invoices` WRITE;
/*!40000 ALTER TABLE `invoices` DISABLE KEYS */;
INSERT INTO `invoices` VALUES (13,NULL,'2020-05-19','Sarah Silver',NULL,NULL,'2020-04-19','2020-05-19',NULL,NULL),(17,NULL,'2020-05-21','Jill Jackson',NULL,NULL,'2020-04-21','2020-05-21','0',NULL);
/*!40000 ALTER TABLE `invoices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `members` (
  `id` int(11) NOT NULL,
  `active` tinyint(5) DEFAULT NULL,
  `role` varchar(45) DEFAULT NULL,
  `org` varchar(45) DEFAULT NULL,
  `sub_type` varchar(25) DEFAULT NULL,
  `num_users` int(11) DEFAULT NULL,
  `max_users` int(11) DEFAULT NULL,
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
  `subscription_id` varchar(30) DEFAULT NULL,
  `customer_id` varchar(30) DEFAULT NULL,
  `payment_method_id` varchar(45) DEFAULT NULL,
  `expMonth` varchar(45) DEFAULT NULL,
  `expYear` varchar(45) DEFAULT NULL,
  `lastFour` varchar(45) DEFAULT NULL,
  `brand` varchar(45) DEFAULT NULL,
  `card_id` varchar(45) DEFAULT NULL,
  `stripe_user_id` varchar(45) DEFAULT NULL,
  `take_pay_type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members`
--

LOCK TABLES `members` WRITE;
/*!40000 ALTER TABLE `members` DISABLE KEYS */;
INSERT INTO `members` VALUES (1,1,'Administrator','Hogwarts','3-5 Users',NULL,0,'Dr.','Harry Potter','Harry','Potter','HP','hpotter@mail.com','123-456-1111','713 Hogwarts Lane','London','TX','77777','Diagon Alley','Sarah Silver','01/1/1999','6764876543','',1,1,1,1,1,1,1,1,1,1,1,1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2,1,'Intern','Hogwarts','3-5 Users',NULL,0,'Ms.','Hermione Grainger','Hermione','Grainger','HG','email@mail.com','123-333-3333','123 Fake Street','Plano',NULL,'75023','Wherever','Billy Joe,Jaren Jones,Johnny Jackson,Joe Jackson,Joan Jackson','02/1/2002','1242658633',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,1,'Therapist','Hogwarts','3-5 Users',NULL,0,'Mr.','Joe Bob','Joe','Bob','JB','job@test123.com','222-223-3333','123 Street Lane','Frisco',NULL,'12345','Nowhere','Sarah Silver,Jaren Jones','03/1/1999','4356787654',NULL,0,0,0,0,0,0,0,1,1,1,1,0,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(4,1,'Administrator','Oz','1-2 Users',NULL,0,'Mr.','John Robinson','John','Robinson','JR','jrob@mail.com','122-222-2222','222 Nowhere','Allen',NULL,'12333','Somewhere',NULL,'04/1/2005','1232456754',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(5,1,'Therapist','Oz','1-2 Users',NULL,0,'Dr','Lisa Simpson','Lisa','Simpson','LS','lsimpson@mail.com','111-222-2222','222 Evergreen Terrace','Springfield',NULL,'22244','Everywhere','Billy Joe,Jaren Jones','05/1/2001','8675674321',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(38,1,'Intern','Oz','1-2 Users',NULL,0,'Mr.','Jake Jakerson','Jake','Jakerson','JJ','jake@mail.com','233-333-3333','123 Jake Street','Jaketopia',NULL,'33333','Main Building',NULL,'05/12/1999','6587776655','Jake has notes',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(45,NULL,'Owner','Oz','1-2 Users',NULL,0,NULL,'Mary Jane','Mary','Jane',NULL,'mary@test123.com',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,1,1,1,1,1,1,1,1,1,1,1,1,'sub_HAdtNiud7nTcH4','cus_HAdtpqDNjkUGOV','pm_1GcIbQG24DT0vj3XRdlz1UZj',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(46,NULL,'Owner','Hogwarts','3-5 Users',NULL,0,NULL,'Bill Johnson','Bill','Johnson',NULL,'bill@test123.com',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,1,1,1,1,1,1,1,1,1,1,1,1,'sub_HE2wpZeJvLlNw7','cus_HE2w1PD2HiKbxW','pm_1GfaqbG24DT0vj3Xt5r7IZQt','2','2025','4242','Visa','src_1GfaqbG24DT0vj3XeKrnkqow','10',NULL),(48,0,'Therapist','Hogwarts','3-5 Users',NULL,0,'','Test  Hogwarts','Test ','Hogwarts',NULL,'test@test.com','','','',NULL,'','',NULL,'','','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(51,NULL,'Owner','nothing',NULL,NULL,NULL,NULL,'Harry Potter','Harry','Potter',NULL,'hpot@mail.com',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reports`
--

DROP TABLE IF EXISTS `reports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `reports` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `report_type` varchar(45) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `create_date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reports`
--

LOCK TABLES `reports` WRITE;
/*!40000 ALTER TABLE `reports` DISABLE KEYS */;
INSERT INTO `reports` VALUES (1,'Hours By Category','2019-02-25','2020-03-25','2020-02-25'),(2,'Billable Hours','2020-02-26','2020-03-26','2020-02-26'),(3,'Billable Hours','2019-10-30','2020-05-02','2020-04-02'),(4,'Hours By Category','2020-01-31','2020-05-25','2020-04-25'),(5,'Hours By Category','2020-01-31','2020-05-25','2020-04-25');
/*!40000 ALTER TABLE `reports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `templates`
--

DROP TABLE IF EXISTS `templates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `templates` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `template_name` varchar(45) DEFAULT NULL,
  `visible` varchar(3) DEFAULT NULL,
  `created` timestamp(6) NULL DEFAULT NULL,
  `sections` varchar(2000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `templates`
--

LOCK TABLES `templates` WRITE;
/*!40000 ALTER TABLE `templates` DISABLE KEYS */;
INSERT INTO `templates` VALUES (1,'SOAP','Yes','2019-07-08 05:00:21.176000','{\"s_note\":\"\",\"a_note\":\"\",\"o_note\":\"\",\"p_note\":\"\"}'),(2,'Narrative','Yes','2019-07-08 05:00:21.176000','{\"narrativeNote\":\"\"}'),(3,'Rating Scale','Yes','2019-07-08 05:00:21.176000','{\"rating1\":6,\"ratingDesc1\":\"sdfasdfas876y9878907\",\"rating2\":10,\"ratingDesc2\":\"sdafasdfas\",\"rating3\":10,\"ratingDesc3\":\"\",\"addRating2\":true,\"addRating3\":false}'),(4,'Percentage Scale','Yes','2019-07-08 05:00:21.176000','{\"first\":\"sdfasdfasd-980897uyjkb jmn\",\"scaleResult\":\"Consistent (>80%)\",\"second\":\"sdafasdfsaujhbjn.m,   lkjm;lkm\",\"scaleResult2\":\"Inconsistent (51-79%)\",\"third\":\"\",\"scaleResult3\":\"\",\"addScale2\":true,\"addScale3\":null}'),(16,'dfdsfdsfasdf','Yes','2020-02-02 23:58:34.985000','[{\"id\":\"c1c30d6ecb58d7f0a77f\",\"fields\":[{\"title\":\"dsfsda\",\"notes\":\"sdfasdfasdfasdfasdfdsfasdfds222222222222222\"}],\"type\":\"Textbox\"},{\"id\":\"b62a44a59a3cb217a103\",\"fields\":[{\"title\":\"dfsadfdasfa222\",\"value\":\"Consistent (>80%)\"}],\"type\":\"Percentage Scale\"},{\"id\":\"48d3ed1cc930e16702a1\",\"fields\":[{\"rating\":9,\"title\":\"sdfasdfasd222222\"}],\"type\":\"Rating Scale\"}]'),(17,'222222222222222','Yes','2020-02-09 05:39:09.063000','[{\"id\":\"7ea6e832fab7bce2ea76\",\"fields\":[{\"title\":\"222222222222\",\"notes\":\"33333333333333333333\"}],\"type\":\"Textbox\"},{\"id\":\"4bc9e69b22c35da18b10\",\"fields\":[{\"title\":\"dddddddddddddd\",\"value\":\"Consistent (>80%)\"},{\"rating\":10,\"title\":\"sssssssssssssss\",\"value\":\"Inconsistent (51-79%)\"}],\"type\":\"Percentage Scale\"}]');
/*!40000 ALTER TABLE `templates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `testevent`
--

DROP TABLE IF EXISTS `testevent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `testevent` (
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
  `session_cost` varchar(100) DEFAULT NULL,
  `session_set_length` double DEFAULT NULL,
  `event_date` datetime DEFAULT NULL,
  `payor` varchar(45) DEFAULT NULL,
  `transType` varchar(45) DEFAULT NULL,
  `amount` varchar(100) DEFAULT NULL,
  `method` varchar(45) DEFAULT NULL,
  `trans_date` date DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `clients` text,
  `therapists` text,
  `clientsID` varchar(100) DEFAULT NULL,
  `therapistsID` varchar(100) DEFAULT NULL,
  `session_costs` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=10431 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `testevent`
--

LOCK TABLES `testevent` WRITE;
/*!40000 ALTER TABLE `testevent` DISABLE KEYS */;
INSERT INTO `testevent` VALUES (10357,'','Billable','','','2020-04-16 08:47:00','2020-04-16 09:47:00','','',NULL,NULL,NULL,NULL,0,'false','','','2020-04-16 08:47:00','','',0,0,0,0,0,0,0,'10357','ssilver@mail.com,ned@mail.com','hpotter@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-04-16',NULL,NULL,'Sarah Silver,Jaren Jones','Harry Potter','2,3','1','20,20'),(10358,'','Billable','','','2020-03-09 08:48:00','2020-03-09 09:48:00','','',NULL,NULL,NULL,NULL,0,'','','','2020-03-09 08:48:00','','',0,0,0,0,0,0,0,'10358','jilljackson@mail.com,ned@mail.com','jrob@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-03-09',NULL,NULL,'Johnny Jackson,Jaren Jones','John Robinson','5,3','4','20,20'),(10359,'','Billable','','','2020-05-11 08:50:00','2020-05-11 09:50:00','','',NULL,NULL,NULL,NULL,0,'','','','2020-05-11 08:50:00','','',0,0,0,0,0,0,0,'10359','jilljackson@mail.com,jilljackson@mail.com','hpotter@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-05-11',NULL,NULL,'Joe Jackson,Joan Jackson','Harry Potter','70,71','1','20,20'),(10379,'','Billable','','','2020-02-01 08:52:00','2020-02-01 09:52:00','','',NULL,NULL,NULL,NULL,1,'Weekly','On Date','','2020-06-06 08:52:00','','',0,0,0,0,0,0,0,'10379','bjoe@mail.com,jilljackson@mail.com','jrob@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-02-01',NULL,NULL,'Billy Joe,Joan Jackson','John Robinson','1,71','4','40,20'),(10380,'','Billable','','','2020-02-08 08:52:00','2020-02-08 09:52:00','','',NULL,NULL,NULL,NULL,1,'Weekly','On Date','','2020-06-06 08:52:00','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'10379','bjoe@mail.com,jilljackson@mail.com','jrob@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-02-08',NULL,NULL,'Billy Joe,Joan Jackson','John Robinson','1,71','4','40,20'),(10381,'','Billable','','','2020-02-15 08:52:00','2020-02-15 09:52:00','','',NULL,NULL,NULL,NULL,1,'Weekly','On Date','','2020-06-06 08:52:00','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'10379','bjoe@mail.com,jilljackson@mail.com','jrob@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-02-15',NULL,NULL,'Billy Joe,Joan Jackson','John Robinson','1,71','4','40,20'),(10382,'','Billable','','','2020-02-22 08:52:00','2020-02-22 09:52:00','','',NULL,NULL,NULL,NULL,1,'Weekly','On Date','','2020-06-06 08:52:00','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'10379','bjoe@mail.com,jilljackson@mail.com','jrob@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-02-22',NULL,NULL,'Billy Joe,Joan Jackson','John Robinson','1,71','4','40,20'),(10383,'','Billable','','','2020-02-29 08:52:00','2020-02-29 09:52:00','','',NULL,NULL,NULL,NULL,1,'Weekly','On Date','','2020-06-06 08:52:00','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'10379','bjoe@mail.com,jilljackson@mail.com','jrob@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-02-29',NULL,NULL,'Billy Joe,Joan Jackson','John Robinson','1,71','4','40,20'),(10384,'','Billable','','','2020-03-07 08:52:00','2020-03-07 09:52:00','','',NULL,NULL,NULL,NULL,1,'Weekly','On Date','','2020-06-06 08:52:00','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'10379','bjoe@mail.com,jilljackson@mail.com','jrob@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-03-07',NULL,NULL,'Billy Joe,Joan Jackson','John Robinson','1,71','4','40,20'),(10385,'','Billable','','','2020-03-14 08:52:00','2020-03-14 09:52:00','','',NULL,NULL,NULL,NULL,1,'Weekly','On Date','','2020-06-06 08:52:00','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'10379','bjoe@mail.com,jilljackson@mail.com','jrob@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-03-14',NULL,NULL,'Billy Joe,Joan Jackson','John Robinson','1,71','4','40,20'),(10386,'','Billable','','','2020-03-21 08:52:00','2020-03-21 09:52:00','','',NULL,NULL,NULL,NULL,1,'Weekly','On Date','','2020-06-06 08:52:00','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'10379','bjoe@mail.com,jilljackson@mail.com','jrob@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-03-21',NULL,NULL,'Billy Joe,Joan Jackson','John Robinson','1,71','4','40,20'),(10387,'','Billable','','','2020-03-28 08:52:00','2020-03-28 09:52:00','','',NULL,NULL,NULL,NULL,1,'Weekly','On Date','','2020-06-06 08:52:00','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'10379','bjoe@mail.com,jilljackson@mail.com','jrob@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-03-28',NULL,NULL,'Billy Joe,Joan Jackson','John Robinson','1,71','4','40,20'),(10388,'','Billable','','','2020-04-04 08:52:00','2020-04-04 09:52:00','','',NULL,NULL,NULL,NULL,1,'Weekly','On Date','','2020-06-06 08:52:00','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'10379','bjoe@mail.com,jilljackson@mail.com','jrob@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-04-04',NULL,NULL,'Billy Joe,Joan Jackson','John Robinson','1,71','4','40,20'),(10389,'','Billable','','','2020-04-11 08:52:00','2020-04-11 09:52:00','','',NULL,NULL,NULL,NULL,1,'Weekly','On Date','','2020-06-06 08:52:00','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'10379','bjoe@mail.com,jilljackson@mail.com','jrob@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-04-11',NULL,NULL,'Billy Joe,Joan Jackson','John Robinson','1,71','4','40,20'),(10390,'','Billable','','','2020-04-18 08:52:00','2020-04-18 09:52:00','','',NULL,NULL,NULL,NULL,1,'Weekly','On Date','','2020-06-06 08:52:00','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'10379','bjoe@mail.com,jilljackson@mail.com','jrob@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-04-18',NULL,NULL,'Billy Joe,Joan Jackson','John Robinson','1,71','4','40,20'),(10391,'','Billable','','','2020-04-25 08:52:00','2020-04-25 09:52:00','','',NULL,NULL,NULL,NULL,1,'Weekly','On Date','','2020-06-06 08:52:00','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'10379','bjoe@mail.com,jilljackson@mail.com','jrob@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-04-25',NULL,NULL,'Billy Joe,Joan Jackson','John Robinson','1,71','4','40,20'),(10392,'','Billable','','','2020-05-02 08:52:00','2020-05-02 09:52:00','','',NULL,NULL,NULL,NULL,1,'Weekly','On Date','','2020-06-06 08:52:00','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'10379','bjoe@mail.com,jilljackson@mail.com','jrob@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-05-02',NULL,NULL,'Billy Joe,Joan Jackson','John Robinson','1,71','4','40,20'),(10393,'','Billable','','','2020-05-09 08:52:00','2020-05-09 09:52:00','','',NULL,NULL,NULL,NULL,1,'Weekly','On Date','','2020-06-06 08:52:00','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'10379','bjoe@mail.com,jilljackson@mail.com','jrob@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-05-09',NULL,NULL,'Billy Joe,Joan Jackson','John Robinson','1,71','4','40,20'),(10394,'','Billable','','','2020-05-16 08:52:00','2020-05-16 09:52:00','','',NULL,NULL,NULL,NULL,1,'Weekly','On Date','','2020-06-06 08:52:00','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'10379','bjoe@mail.com,jilljackson@mail.com','jrob@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-05-16',NULL,NULL,'Billy Joe,Joan Jackson','John Robinson','1,71','4','40,20'),(10395,'','Billable','','','2020-05-23 08:52:00','2020-05-23 09:52:00','','',NULL,NULL,NULL,NULL,1,'Weekly','On Date','','2020-06-06 08:52:00','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'10379','bjoe@mail.com,jilljackson@mail.com','jrob@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-05-23',NULL,NULL,'Billy Joe,Joan Jackson','John Robinson','1,71','4','40,20'),(10396,'','Billable','','','2020-05-30 08:52:00','2020-05-30 09:52:00','','',NULL,NULL,NULL,NULL,1,'Weekly','On Date','','2020-06-06 08:52:00','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'10379','bjoe@mail.com,jilljackson@mail.com','jrob@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-05-30',NULL,NULL,'Billy Joe,Joan Jackson','John Robinson','1,71','4','40,20'),(10397,'','Billable','','','2020-06-06 08:52:00','2020-06-06 09:52:00','','',NULL,NULL,NULL,NULL,1,'Weekly','On Date','','2020-06-06 08:52:00','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'10379','bjoe@mail.com,jilljackson@mail.com','jrob@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-06-06',NULL,NULL,'Billy Joe,Joan Jackson','John Robinson','1,71','4','40,20'),(10398,'','Billable','','','2020-03-09 12:01:00','2020-03-09 13:01:00','','',NULL,NULL,NULL,NULL,1,'Weekly','On Date','','2020-06-15 12:02:00','','',0,0,0,0,0,0,0,'10398','money@mail.com','lsimpson@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-03-09',NULL,NULL,'Ian Stark','Lisa Simpson','4','5','20'),(10399,'','Billable','','','2020-03-16 12:01:00','2020-03-16 13:01:00','','',NULL,NULL,NULL,NULL,1,'Weekly','On Date','','2020-06-15 12:02:00','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'10398','money@mail.com','lsimpson@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-03-16',NULL,NULL,'Ian Stark','Lisa Simpson','4','5','20'),(10400,'','Billable','','','2020-03-23 12:01:00','2020-03-23 13:01:00','','',NULL,NULL,NULL,NULL,1,'Weekly','On Date','','2020-06-15 12:02:00','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'10398','money@mail.com','lsimpson@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-03-23',NULL,NULL,'Ian Stark','Lisa Simpson','4','5','20'),(10401,'','Billable','','','2020-03-30 12:01:00','2020-03-30 13:01:00','','',NULL,NULL,NULL,NULL,1,'Weekly','On Date','','2020-06-15 12:02:00','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'10398','money@mail.com','lsimpson@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-03-30',NULL,NULL,'Ian Stark','Lisa Simpson','4','5','20'),(10402,'','Billable','','','2020-04-06 12:01:00','2020-04-06 13:01:00','','',NULL,NULL,NULL,NULL,1,'Weekly','On Date','','2020-06-15 12:02:00','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'10398','money@mail.com','lsimpson@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-04-06',NULL,NULL,'Ian Stark','Lisa Simpson','4','5','20'),(10403,'','Billable','','','2020-04-13 12:01:00','2020-04-13 13:01:00','','',NULL,NULL,NULL,NULL,1,'Weekly','On Date','','2020-06-15 12:02:00','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'10398','money@mail.com','lsimpson@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-04-13',NULL,NULL,'Ian Stark','Lisa Simpson','4','5','20'),(10404,'','Billable','','','2020-04-20 12:01:00','2020-04-20 13:01:00','','',NULL,NULL,NULL,NULL,1,'Weekly','On Date','','2020-06-15 12:02:00','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'10398','money@mail.com','lsimpson@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-04-20',NULL,NULL,'Ian Stark','Lisa Simpson','4','5','20'),(10405,'','Billable','','','2020-04-27 12:01:00','2020-04-27 13:01:00','','',NULL,NULL,NULL,NULL,1,'Weekly','On Date','','2020-06-15 12:02:00','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'10398','money@mail.com','lsimpson@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-04-27',NULL,NULL,'Ian Stark','Lisa Simpson','4','5','20'),(10406,'','Billable','','','2020-05-04 12:01:00','2020-05-04 13:01:00','','',NULL,NULL,NULL,NULL,1,'Weekly','On Date','','2020-06-15 12:02:00','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'10398','money@mail.com','lsimpson@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-05-04',NULL,NULL,'Ian Stark','Lisa Simpson','4','5','20'),(10407,'','Billable','','','2020-05-11 12:01:00','2020-05-11 13:01:00','','',NULL,NULL,NULL,NULL,1,'Weekly','On Date','','2020-06-15 12:02:00','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'10398','money@mail.com','lsimpson@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-05-11',NULL,NULL,'Ian Stark','Lisa Simpson','4','5','20'),(10408,'','Billable','','','2020-05-18 12:01:00','2020-05-18 13:01:00','','',NULL,NULL,NULL,NULL,1,'Weekly','On Date','','2020-06-15 12:02:00','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'10398','money@mail.com','lsimpson@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-05-18',NULL,NULL,'Ian Stark','Lisa Simpson','4','5','20'),(10409,'','Billable','','','2020-05-25 12:01:00','2020-05-25 13:01:00','','',NULL,NULL,NULL,NULL,1,'Weekly','On Date','','2020-06-15 12:02:00','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'10398','money@mail.com','lsimpson@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-05-25',NULL,NULL,'Ian Stark','Lisa Simpson','4','5','20'),(10410,'','Billable','','','2020-06-01 12:01:00','2020-06-01 13:01:00','','',NULL,NULL,NULL,NULL,1,'Weekly','On Date','','2020-06-15 12:02:00','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'10398','money@mail.com','lsimpson@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-06-01',NULL,NULL,'Ian Stark','Lisa Simpson','4','5','20'),(10411,'','Billable','','','2020-06-08 12:01:00','2020-06-08 13:01:00','','',NULL,NULL,NULL,NULL,1,'Weekly','On Date','','2020-06-15 12:02:00','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'10398','money@mail.com','lsimpson@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-06-08',NULL,NULL,'Ian Stark','Lisa Simpson','4','5','20'),(10412,'','Billable','','','2020-06-15 12:01:00','2020-06-15 13:01:00','','',NULL,NULL,NULL,NULL,1,'Weekly','On Date','','2020-06-15 12:02:00','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'10398','money@mail.com','lsimpson@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-06-15',NULL,NULL,'Ian Stark','Lisa Simpson','4','5','20'),(10414,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'bjoe@mail.com',NULL,NULL,NULL,NULL,'Bob Joe','Payment','50','Cash','2020-04-16','Bob\'s payment',NULL,NULL,NULL,NULL,NULL,NULL),(10418,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'money@mail.com',NULL,NULL,NULL,NULL,'Fred Jakerson','Payment','20','Cash','2020-04-17','Payment from fred',NULL,NULL,NULL,NULL,NULL,NULL),(10419,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'jilljackson@mail.com',NULL,NULL,NULL,NULL,'Jill Jackson','Payment','40','Cash','2020-04-17','Jill\'s payment',NULL,NULL,NULL,NULL,NULL,NULL),(10420,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'jilljackson@mail.com',NULL,NULL,NULL,NULL,'Jill Jackson','Payment','80','Cash','2020-04-21','Another payment for jill',NULL,NULL,NULL,NULL,NULL,NULL),(10421,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'money@mail.com',NULL,NULL,NULL,NULL,'Fred Jakerson','Payment','40','Cash','2020-04-21','here is fred\'s payment',NULL,NULL,NULL,NULL,NULL,NULL),(10425,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'ssilver@mail.com',NULL,NULL,NULL,NULL,'Sarah Silver','Payment','50','Cash','2020-05-14','efefefef',NULL,NULL,NULL,NULL,NULL,NULL),(10426,'','Billable','','','2020-05-19 19:48:00','2020-05-19 20:48:00','','',NULL,NULL,NULL,NULL,1,'Weekly','After','2','2020-05-19 19:48:00','','',0,0,0,0,0,0,0,'10426','bjoe@mail.com,ssilver@mail.com','email@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-05-19',NULL,NULL,'Billy Joe,Sarah Silver','Hermione Grainger','1,2','2','40,20'),(10427,'','Billable','','','2020-05-26 19:48:00','2020-05-26 20:48:00','','',NULL,NULL,NULL,NULL,1,'Weekly','After','2','2020-05-19 19:48:00','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'10426','bjoe@mail.com,ssilver@mail.com','email@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-05-26',NULL,NULL,'Billy Joe,Sarah Silver','Hermione Grainger','1,2','2','40,20'),(10428,'','Billable','','','2020-05-21 08:21:00','2020-05-21 09:21:00','','',NULL,NULL,NULL,NULL,0,'false','','','2020-05-21 08:21:00','','',0,0,0,0,0,0,0,'10428','jilljackson@mail.com','email@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-05-21',NULL,NULL,'Johnny Jackson','Hermione Grainger','5','2','20'),(10430,'','Billable','','','2020-06-27 19:15:00','2020-06-27 20:15:00','','',NULL,NULL,NULL,NULL,0,'false','','','2020-06-27 19:15:00','','',0,0,0,0,0,0,0,'10430','jilljackson@mail.com','email@mail.com','0',0,NULL,NULL,'Calendar',NULL,NULL,'2020-06-27',NULL,NULL,'Johnny Jackson','Hermione Grainger','5','2','20');
/*!40000 ALTER TABLE `testevent` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
