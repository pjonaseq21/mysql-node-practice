-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 21 Lis 2022, 16:51
-- Wersja serwera: 10.4.25-MariaDB
-- Wersja PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `test`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users_data`
--

CREATE TABLE `users_data` (
  `id` int(10) UNSIGNED NOT NULL,
  `login` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  `password` varchar(255) NOT NULL,
  `photo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `users_data`
--

INSERT INTO `users_data` (`id`, `login`, `password`, `photo`) VALUES
(1, 'test', '098f6bcd4621d373cade4e832627b4f6', ''),
(2, 'test', '098f6bcd4621d373cade4e832627b4f6', ''),
(3, 'halo', '8e2a4b3edb5f63ef3a378151448d82b5', ''),
(4, 'halo', '8e2a4b3edb5f63ef3a378151448d82b5', ''),
(5, 'test', 'test', ''),
(6, 'test', 'test', ''),
(7, 'undefined', 'undefined', ''),
(8, 'undefined', 'undefined', ''),
(9, 'pjonas', 'katowice1', '');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `users_data`
--
ALTER TABLE `users_data`
  ADD PRIMARY KEY (`id`),
  ADD KEY `test` (`login`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `users_data`
--
ALTER TABLE `users_data`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
