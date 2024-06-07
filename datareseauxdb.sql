-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 07 juin 2024 à 15:15
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `datareseauxdb`
--

-- --------------------------------------------------------

--
-- Structure de la table `company_references`
--

CREATE TABLE `company_references` (
  `id` int(11) NOT NULL,
  `logo_path` varchar(255) NOT NULL,
  `category` enum('infrastructure','industrie') NOT NULL DEFAULT 'infrastructure'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `company_references`
--

INSERT INTO `company_references` (`id`, `logo_path`, `category`) VALUES
(144, 'uploads\\1717663558983.png', 'industrie'),
(145, 'uploads\\1717664143968.png', 'industrie'),
(147, 'uploads\\1717664811264.png', 'industrie'),
(148, 'uploads\\1717664835522.jpg', 'industrie'),
(150, 'uploads\\1717665033889.png', 'industrie'),
(151, 'uploads\\1717665098548.png', 'industrie'),
(152, 'uploads\\1717665202786.jpeg', 'industrie'),
(153, 'uploads\\1717665251443.png', 'industrie'),
(154, 'uploads\\1717665302495.png', 'industrie'),
(155, 'uploads\\1717665349348.png', 'industrie'),
(156, 'uploads\\1717665408891.png', 'industrie'),
(157, 'uploads\\1717665614629.webp', 'industrie'),
(158, 'uploads\\1717665678680.png', 'industrie'),
(159, 'uploads\\1717665719113.png', 'industrie'),
(160, 'uploads\\1717665759920.png', 'industrie'),
(161, 'uploads\\1717665801670.png', 'industrie'),
(162, 'uploads\\1717665845395.png', 'industrie'),
(163, 'uploads\\1717665885657.png', 'industrie'),
(164, 'uploads\\1717665932732.jpg', 'industrie'),
(165, 'uploads\\1717666013317.png', 'industrie'),
(166, 'uploads\\1717666142978.png', 'industrie'),
(167, 'uploads\\1717666173177.png', 'industrie'),
(168, 'uploads\\1717666230161.png', 'industrie'),
(169, 'uploads\\1717666249131.png', 'industrie'),
(170, 'uploads\\1717666298333.png', 'industrie'),
(171, 'uploads\\1717666340763.jpeg', 'industrie'),
(172, 'uploads\\1717666378010.png', 'industrie'),
(173, 'uploads\\1717666406596.jpg', 'industrie'),
(174, 'uploads\\1717666433387.png', 'industrie'),
(175, 'uploads\\1717666466469.png', 'industrie'),
(176, 'uploads\\1717666533968.jpg', 'industrie'),
(177, 'uploads\\1717666699098.jpg', 'industrie'),
(178, 'uploads\\1717666759418.jpg', 'industrie'),
(179, 'uploads\\1717667356096.png', 'infrastructure'),
(180, 'uploads\\1717667441964.png', 'infrastructure'),
(181, 'uploads\\1717667474841.png', 'infrastructure'),
(182, 'uploads\\1717667520488.png', 'infrastructure'),
(183, 'uploads\\1717667555804.jpeg', 'infrastructure'),
(184, 'uploads\\1717667690728.jpg', 'infrastructure'),
(185, 'uploads\\1717667720732.png', 'infrastructure'),
(186, 'uploads\\1717667754801.png', 'infrastructure'),
(187, 'uploads\\1717667794656.png', 'infrastructure'),
(188, 'uploads\\1717667843760.jpg', 'infrastructure'),
(189, 'uploads\\1717667873871.png', 'infrastructure'),
(190, 'uploads\\1717667900733.png', 'infrastructure'),
(191, 'uploads\\1717667927890.png', 'infrastructure'),
(192, 'uploads\\1717667957070.png', 'infrastructure'),
(193, 'uploads\\1717668014793.png', 'infrastructure'),
(194, 'uploads\\1717668055094.png', 'infrastructure'),
(195, 'uploads\\1717668086529.png', 'infrastructure'),
(196, 'uploads\\1717668113965.png', 'infrastructure'),
(197, 'uploads\\1717668201705.jpg', 'infrastructure'),
(198, 'uploads\\1717668326516.png', 'infrastructure'),
(199, 'uploads\\1717668394845.png', 'infrastructure'),
(200, 'uploads\\1717668431256.png', 'infrastructure'),
(201, 'uploads\\1717668454078.png', 'infrastructure'),
(202, 'uploads\\1717668480462.png', 'infrastructure'),
(203, 'uploads\\1717668506723.png', 'infrastructure'),
(204, 'uploads\\1717668535720.png', 'infrastructure'),
(205, 'uploads\\1717668560133.png', 'infrastructure'),
(206, 'uploads\\1717668600085.png', 'infrastructure'),
(207, 'uploads\\1717668631174.jpeg', 'infrastructure'),
(208, 'uploads\\1717668657508.png', 'infrastructure'),
(209, 'uploads\\1717668685085.png', 'infrastructure'),
(210, 'uploads\\1717668714520.png', 'infrastructure'),
(211, 'uploads\\1717668934145.jpg', 'infrastructure');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'root', '%DaTaReSeauX%');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `company_references`
--
ALTER TABLE `company_references`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `company_references`
--
ALTER TABLE `company_references`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=212;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
