-- MariaDB dump 10.17  Distrib 10.4.10-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: maindb
-- ------------------------------------------------------
-- Server version	10.4.10-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blood_level`
--

DROP TABLE IF EXISTS `blood_level`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `blood_level` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hospital_name` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `blood_type` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `percentage_stored` decimal(10,0) NOT NULL,
  `date_of_report` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `hospital_name` (`hospital_name`),
  CONSTRAINT `blood_level_ibfk_1` FOREIGN KEY (`hospital_name`) REFERENCES `hospitals` (`hospital_name`)
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blood_level`
--

LOCK TABLES `blood_level` WRITE;
/*!40000 ALTER TABLE `blood_level` DISABLE KEYS */;
INSERT INTO `blood_level` VALUES (1,'Mount Sinai Queens','AP',78,'2019-12-01 01:00:00'),(2,'Coney Island Hospital','AP',35,'2019-12-01 01:00:00'),(3,'Coney Island Hospital','AN',23,'2019-12-01 01:00:00'),(4,'Coney Island Hospital','BN',31,'2019-12-01 01:00:00'),(5,'Coney Island Hospital','BP',18,'2019-12-01 01:00:00'),(6,'Coney Island Hospital','ON',19,'2019-12-01 01:00:00'),(7,'Coney Island Hospital','OP',27,'2019-12-01 01:00:00'),(8,'Coney Island Hospital','ABN',28,'2019-12-01 01:00:00'),(9,'Coney Island Hospital','ABP',21,'2019-12-01 01:00:00'),(10,'Mount Sinai Queens','AN',25,'2019-12-01 01:00:00'),(11,'Mount Sinai Queens','BP',34,'2019-12-01 01:00:00'),(12,'Mount Sinai Queens','BN',21,'2019-12-01 01:00:00'),(13,'Mount Sinai Queens','OP',16,'2019-12-01 01:00:00'),(14,'Mount Sinai Queens','ON',18,'2019-12-01 01:00:00'),(15,'Mount Sinai Queens','ABP',25,'2019-12-01 01:00:00'),(16,'Mount Sinai Queens','ABN',23,'2019-12-01 01:00:00'),(17,'Seaview Hospital','AP',15,'2019-12-01 01:00:00'),(18,'Seaview Hospital','AN',21,'2019-12-01 01:00:00'),(19,'Seaview Hospital','BP',18,'2019-12-01 01:00:00'),(20,'Seaview Hospital','BN',31,'2019-12-01 01:00:00'),(21,'Seaview Hospital','ON',43,'2019-12-01 01:00:00'),(22,'Seaview Hospital','OP',13,'2019-12-01 01:00:00'),(23,'Seaview Hospital','ABN',12,'2019-12-01 01:00:00'),(24,'Seaview Hospital','ABP',25,'2019-12-01 01:00:00'),(25,'Bellevue Hospital Center','AP',18,'2019-12-01 01:00:00'),(26,'Bellevue Hospital Center','AN',14,'2019-12-01 01:00:00'),(27,'Bellevue Hospital Center','BP',18,'2019-12-01 01:00:00'),(28,'Bellevue Hospital Center','BN',17,'2019-12-01 01:00:00'),(29,'Bellevue Hospital Center','OP',23,'2019-12-01 01:00:00'),(30,'Bellevue Hospital Center','ON',25,'2019-12-01 01:00:00'),(31,'Bellevue Hospital Center','ABP',21,'2019-12-01 01:00:00'),(32,'Bellevue Hospital Center','ABN',11,'2019-12-01 01:00:00'),(33,'Jacobi Medical Center','AP',16,'2019-12-01 01:00:00'),(34,'Jacobi Medical Center','AN',23,'2019-12-01 01:00:00'),(35,'Jacobi Medical Center','BP',18,'2019-12-01 01:00:00'),(36,'Jacobi Medical Center','BN',14,'2019-12-01 01:00:00'),(37,'Jacobi Medical Center','OP',24,'2019-12-01 01:00:00'),(38,'Jacobi Medical Center','ON',28,'2019-12-01 01:00:00'),(39,'Jacobi Medical Center','ABN',24,'2019-12-01 01:00:00'),(40,'Jacobi Medical Center','ABP',26,'2019-12-01 01:00:00'),(41,'Coney Island Hospital','AP',35,'2019-12-01 01:00:00'),(42,'Mount Sinai Queens','AP',78,'2019-12-01 01:00:00'),(43,'Seaview Hospital','AP',15,'2019-12-02 01:00:00'),(44,'Bellevue Hospital Center','ABN',11,'2019-12-02 01:00:00'),(45,'Jacobi Medical Center','ABP',26,'2019-12-02 01:00:00'),(46,'Coney Island Hospital','AN',23,'2019-12-02 01:00:00'),(47,'Coney Island Hospital','BP',28,'2019-12-02 01:00:00'),(48,'Coney Island Hospital','BN',16,'2019-12-02 01:00:00'),(49,'Coney Island Hospital','OP',21,'2019-12-02 01:00:00'),(50,'Coney Island Hospital','ON',24,'2019-12-02 01:00:00'),(51,'Coney Island Hospital','ABP',21,'2019-12-02 01:00:00'),(52,'Coney Island Hospital','ABN',19,'2019-12-02 01:00:00'),(53,'Mount Sinai Queens','AN',25,'2019-12-02 01:00:00'),(54,'Mount Sinai Queens','BP',18,'2019-12-02 01:00:00'),(55,'Mount Sinai Queens','BN',23,'2019-12-02 01:00:00'),(56,'Mount Sinai Queens','OP',17,'2019-12-02 01:00:00'),(57,'Mount Sinai Queens','ON',31,'2019-12-02 01:00:00'),(58,'Mount Sinai Queens','ABP',28,'2019-12-02 01:00:00'),(59,'Mount Sinai Queens','ABN',24,'2019-12-02 01:00:00'),(60,'Seaview Hospital','AN',18,'2019-12-02 01:00:00'),(61,'Seaview Hospital','BP',9,'2019-12-02 01:00:00'),(62,'Seaview Hospital','BN',23,'2019-12-02 01:00:00'),(63,'Seaview Hospital','OP',14,'2019-12-02 01:00:00'),(64,'Seaview Hospital','ON',17,'2019-12-02 01:00:00'),(65,'Seaview Hospital','ABP',18,'2019-12-02 01:00:00'),(66,'Seaview Hospital','ABN',21,'2019-12-02 01:00:00'),(67,'Bellevue Hospital Center','AP',18,'2019-12-02 01:00:00'),(68,'Bellevue Hospital Center','AN',32,'2019-12-02 01:00:00'),(69,'Bellevue Hospital Center','BN',25,'2019-12-02 01:00:00'),(70,'Bellevue Hospital Center','BP',31,'2019-12-02 01:00:00'),(71,'Bellevue Hospital Center','OP',33,'2019-12-02 01:00:00'),(72,'Bellevue Hospital Center','ON',18,'2019-12-02 01:00:00'),(73,'Bellevue Hospital Center','ABP',12,'2019-12-02 01:00:00'),(74,'Bellevue Hospital Center','ABN',7,'2019-12-02 01:00:00'),(75,'Jacobi Medical Center','ABN',23,'2019-12-02 01:00:00'),(76,'Jacobi Medical Center','OP',17,'2019-12-02 01:00:00'),(77,'Jacobi Medical Center','ON',21,'2019-12-02 01:00:00'),(78,'Jacobi Medical Center','AP',25,'2019-12-02 01:00:00'),(79,'Jacobi Medical Center','AN',14,'2019-12-02 01:00:00'),(80,'Jacobi Medical Center','BP',16,'2019-12-02 01:00:00'),(81,'Jacobi Medical Center','BN',10,'2019-12-02 01:00:00');
/*!40000 ALTER TABLE `blood_level` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bloodtypes`
--

DROP TABLE IF EXISTS `bloodtypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bloodtypes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bloodtype` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bloodtypes`
--

LOCK TABLES `bloodtypes` WRITE;
/*!40000 ALTER TABLE `bloodtypes` DISABLE KEYS */;
/*!40000 ALTER TABLE `bloodtypes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `donar_info`
--

DROP TABLE IF EXISTS `donar_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `donar_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `weight` float NOT NULL,
  `diseases` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `firstname` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lastname` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bloodtype` char(3) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `userID` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `donar_info_ibfk_1` (`userID`),
  CONSTRAINT `donar_info_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donar_info`
--

LOCK TABLES `donar_info` WRITE;
/*!40000 ALTER TABLE `donar_info` DISABLE KEYS */;
INSERT INTO `donar_info` VALUES (1,154,'diabetes','Micheal','James','mj@yahoo.com','AN',1),(16,143,'HIGH BLOOD PRESSURE','JESSIE ','HOLMES','JHOLM@YAHOO.COM','AP',4),(18,143,'NONE','SARINA','WHELAN','SW@YAHOO.COM','ABP',9);
/*!40000 ALTER TABLE `donar_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `donations`
--

DROP TABLE IF EXISTS `donations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `donations` (
  `donarID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `date_donated` timestamp NOT NULL DEFAULT curdate(),
  `userID` int(10) unsigned NOT NULL,
  PRIMARY KEY (`donarID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donations`
--

LOCK TABLES `donations` WRITE;
/*!40000 ALTER TABLE `donations` DISABLE KEYS */;
INSERT INTO `donations` VALUES (1,'2019-12-10 23:50:34',0),(2,'2019-12-10 05:00:00',0);
/*!40000 ALTER TABLE `donations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hospitals`
--

DROP TABLE IF EXISTS `hospitals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hospitals` (
  `location` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hospital_name` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`hospital_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hospitals`
--

LOCK TABLES `hospitals` WRITE;
/*!40000 ALTER TABLE `hospitals` DISABLE KEYS */;
INSERT INTO `hospitals` VALUES ('Manhattan','Bellevue Hospital Center'),('Brooklyn','Coney Island Hospital'),('Bronx','Jacobi Medical Center'),('Queens','Mount Sinai Queens'),('Staten Island','Seaview Hospital');
/*!40000 ALTER TABLE `hospitals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `userID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `lastname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `firstname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sex` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `location` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date_created` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'James','Micheal','Micheal.James','mj@yahoo.com',19,'212-345-2316','Male','BROOKLYN','2019-12-12 00:58:59'),(4,'ISHAAN','ELLIOT','Ishaan.Elliot','IE123@YAHOO.COM',42,'712-683-1352','Male','BROOKLYN','2019-12-12 03:43:57'),(5,'REED','LEWIS','REED.LEWIS','RL@GMAIL.COM',21,'123-456-1235','Male','QUEENS','2019-12-12 03:43:57'),(6,'EOIN','JOHN','Eoin.John','EJ@AOL.COM',28,'342-325-2361','Male','STATEN ISLAND','2019-12-12 03:43:57'),(7,'MAIR','HUBERT','Mair.Hubert','MH@GMAIL.COM',32,'212-456-1235','Female','MANHATTAN','2019-12-12 03:43:57'),(8,'HOLMES','JESSIE ','Jessie .Holmes','JH@YAHOO.COM',27,'212-126-1541','Female','MANHATTAN','2019-12-12 03:43:57'),(9,'WHELAN','SARINA','SARINA.WHELAN','SW@YAHOO.COM',43,'212-745-1982','Female','MANHATTAN','2019-12-12 03:43:57'),(10,'SEAMUS','MACKIE','Mackie.Seamus','MS12@AOL.COM',23,'212-576-1572','Female','BROOKLYN','2019-12-12 03:43:57'),(11,'MEDINA','KAIRA','KAIRA.MEDINA','KMED@GMAIL.COM',26,'212-563-3513','Female','QUEENS','2019-12-12 03:43:57'),(12,'KEMP','OSKAR','Oskar.Kemp','OKEMP@YAHOO.COM',36,'212-456-1253','Male','BROOKLYN','2019-12-12 03:43:57');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-12 13:43:44
