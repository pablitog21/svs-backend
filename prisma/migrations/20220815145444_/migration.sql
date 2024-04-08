-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `ape` VARCHAR(191) NOT NULL,
    `correo` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `confcont` VARCHAR(191) NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,
    `fechnacim` DATETIME(3) NOT NULL,
    `sexo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Proveedor` (
    `id_prove` INTEGER NOT NULL AUTO_INCREMENT,
    `nom_ape` VARCHAR(191) NOT NULL,
    `direc` VARCHAR(191) NOT NULL,
    `tel` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `tip_ident` VARCHAR(191) NOT NULL,
    `num_doc` INTEGER NOT NULL,

    PRIMARY KEY (`id_prove`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Empleado` (
    `id_emple` INTEGER NOT NULL AUTO_INCREMENT,
    `nom_ape` VARCHAR(191) NOT NULL,
    `direc` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `tel` VARCHAR(191) NOT NULL,
    `est` VARCHAR(191) NOT NULL,
    `cargo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_emple`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Forma_pago` (
    `id_pago` INTEGER NOT NULL AUTO_INCREMENT,
    `for_pago` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_pago`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cliente` (
    `id_client` INTEGER NOT NULL AUTO_INCREMENT,
    `nom_ape` VARCHAR(191) NOT NULL,
    `direc` VARCHAR(191) NOT NULL,
    `tel` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `tip_ident` VARCHAR(191) NOT NULL,
    `num_ident` INTEGER NOT NULL,

    PRIMARY KEY (`id_client`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Producto` (
    `id_prod` INTEGER NOT NULL AUTO_INCREMENT,
    `id_prove` INTEGER NOT NULL,
    `nom_prod` VARCHAR(191) NOT NULL,
    `descrip` VARCHAR(191) NOT NULL,
    `vr` INTEGER NOT NULL,

    PRIMARY KEY (`id_prod`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Gestion_ss` (
    `id_gest` INTEGER NOT NULL AUTO_INCREMENT,
    `id_emple` INTEGER NOT NULL,
    `nom_ape` VARCHAR(191) NOT NULL,
    `tip_ident` VARCHAR(191) NOT NULL,
    `num_ident` INTEGER NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `tel` VARCHAR(191) NOT NULL,
    `direc` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_gest`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reporte_fallas` (
    `id_falla` INTEGER NOT NULL AUTO_INCREMENT,
    `fech_report` DATETIME(3) NOT NULL,
    `cuenrepo` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `dat_falla` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_falla`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Detalle_falla` (
    `id_repor_falla` INTEGER NOT NULL AUTO_INCREMENT,
    `id_falla` INTEGER NOT NULL,
    `id_emple` INTEGER NOT NULL,

    PRIMARY KEY (`id_repor_falla`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ventas` (
    `id_vent` INTEGER NOT NULL AUTO_INCREMENT,
    `id_client` INTEGER NOT NULL,
    `fech` DATETIME(3) NOT NULL,
    `id_pag` INTEGER NOT NULL,
    `vr_total` INTEGER NOT NULL,

    PRIMARY KEY (`id_vent`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Detalle_ventas` (
    `id_det_vent` INTEGER NOT NULL AUTO_INCREMENT,
    `id_vent` INTEGER NOT NULL,
    `id_prod` INTEGER NOT NULL,
    `cant` INTEGER NOT NULL,
    `vr_pag` INTEGER NOT NULL,
    `obser` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_det_vent`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Recarga` (
    `id_recar` INTEGER NOT NULL AUTO_INCREMENT,
    `fech_recarg` DATETIME(3) NOT NULL,
    `vr` INTEGER NOT NULL,

    PRIMARY KEY (`id_recar`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
