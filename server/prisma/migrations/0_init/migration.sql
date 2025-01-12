-- CreateTable
CREATE TABLE `crimes_on_women` (
    `id` INTEGER NOT NULL,
    `state` TEXT NULL,
    `year` INTEGER NULL,
    `rape` INTEGER NULL,
    `kidnap_and_assault` INTEGER NULL,
    `dowry_deaths` INTEGER NULL,
    `assault_against_women` INTEGER NULL,
    `assault_against_modesty_of_women` INTEGER NULL,
    `domestic_violence` INTEGER NULL,
    `women_trafficking` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

