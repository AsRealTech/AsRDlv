-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 06, 2025 at 04:02 PM
-- Server version: 8.0.37
-- PHP Version: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lntawkha_Db`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int NOT NULL,
  `name` varchar(50) NOT NULL,
  `pass` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `pass`, `email`) VALUES
(1, 'admin', 'Tawk2024#.#.', 'admin@admin.com');

-- --------------------------------------------------------

--
-- Table structure for table `education`
--

CREATE TABLE `education` (
  `id` int NOT NULL,
  `degree` varchar(100) NOT NULL,
  `graduation_y` varchar(20) NOT NULL,
  `institution` varchar(200) NOT NULL,
  `short_intro` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `professional_experience`
--

CREATE TABLE `professional_experience` (
  `id` int NOT NULL,
  `work_post` varchar(50) NOT NULL,
  `year` varchar(20) NOT NULL,
  `organizition` varchar(200) NOT NULL,
  `contributions_1` varchar(300) NOT NULL,
  `contributions_2` varchar(300) NOT NULL,
  `contributions_3` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

CREATE TABLE `profile` (
  `id` int NOT NULL,
  `FullName` varchar(100) NOT NULL,
  `ContactDetails` varchar(200) NOT NULL,
  `Address` varchar(200) NOT NULL,
  `dob` date NOT NULL,
  `job` varchar(100) NOT NULL,
  `EmployeeID` varchar(100) NOT NULL,
  `ReportingManager` varchar(200) NOT NULL,
  `workLocation` varchar(200) NOT NULL,
  `Educational` varchar(200) NOT NULL,
  `Certifications` varchar(200) NOT NULL,
  `TrainingCertifications` varchar(200) NOT NULL,
  `SecurityClearanceLevel` varchar(200) NOT NULL,
  `BackgroundCheck` varchar(100) NOT NULL,
  `Language` varchar(200) NOT NULL,
  `Skills` varchar(200) NOT NULL,
  `SpecializedTraining` varchar(200) NOT NULL,
  `m3` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `profile`
--

INSERT INTO `profile` (`id`, `FullName`, `ContactDetails`, `Address`, `dob`, `job`, `EmployeeID`, `ReportingManager`, `workLocation`, `Educational`, `Certifications`, `TrainingCertifications`, `SecurityClearanceLevel`, `BackgroundCheck`, `Language`, `Skills`, `SpecializedTraining`, `m3`) VALUES
(1, 'Angelo Francis', 'angelofrancis7481@gmail.com', '348 Viridian park Ln , Arlington Tx 76005 , USA', '2024-05-23', 'Airline pilot', 'DA82673', 'Luke Murphy, Ualukemurphy@gmail.com', 'Airport Location, Shift: Day Shift', 'Bachelor of Science in Aviation Technology', 'ATP certificate,ATPL', 'CPR certificate. Safety of protocol training', 'Level 3', 'Cleared', 'English, Spanish, Italian', 'Conflict Resolution, First Aid', 'Crisis Management, First Aid, Conflict Resolution', 0),
(18, 'Kendric Thitiphung   ', 'Kendricthiti2812@gmail.com', 'Florida, USA', '1974-11-18', 'RETIRED', '', 'Major John Smith', 'USA, Afghanistan, Syria. ', 'High School ', 'Military fitness Specialist certification, Certified Professional Human Resource, Rapid Response Specialist, Certified Personal Trainer, Life Support Specialist. ', 'Captain ', 'Level 3', 'Cleared', 'English', 'Analytical intelligence, Conflict Resolution, First Aid Adaptability, Technical Proficiency, Leadership, Teamwork, Ability to perform under pressure, Strong communication skills, Discipline, Resilienc', 'Tactical, Technical, Physical, Leadership development. ', 0),
(19, 'Kendric Thitiphung', 'Kendricthiti2812@gmail.com', 'Florida, USA', '1974-11-18', 'RETIRED', 'DA6755438', 'Major John Smith ', 'USA, Afghanistan, Syria. ', 'High School', 'Military fitness Specialist certification, Certified Professional Human Resource, Rapid Response Specialist, Certified Personal Trainer, Life Support Specialist.', 'Captain', 'Level 3', 'Cleared', 'English ', 'Analytical intelligence, Conflict Resolution, First Aid Adaptability, Technical Proficiency, Leadership, Teamwork, Ability to perform under pressure, Strong communication skills, Discipline, Resilienc', 'Tactical, Technical, Physical, Leadership development.', 0);

-- --------------------------------------------------------

--
-- Table structure for table `profile_sum`
--

CREATE TABLE `profile_sum` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `short_about` varchar(300) NOT NULL,
  `address` varchar(200) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int NOT NULL,
  `Services_1` varchar(100) NOT NULL,
  `Services_2` varchar(100) NOT NULL,
  `Services_3` varchar(100) NOT NULL,
  `Services_4` varchar(100) NOT NULL,
  `Services_5` varchar(100) NOT NULL,
  `Services_6` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

CREATE TABLE `skills` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `a` varchar(100) NOT NULL,
  `b` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `education`
--
ALTER TABLE `education`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `professional_experience`
--
ALTER TABLE `professional_experience`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `EmployeeID` (`EmployeeID`);

--
-- Indexes for table `profile_sum`
--
ALTER TABLE `profile_sum`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `education`
--
ALTER TABLE `education`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `professional_experience`
--
ALTER TABLE `professional_experience`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `profile`
--
ALTER TABLE `profile`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `profile_sum`
--
ALTER TABLE `profile_sum`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `skills`
--
ALTER TABLE `skills`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
