<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20241111181304 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE water_intakes ADD time TIME NOT NULL, ADD amount INT NOT NULL, DROP daily_goal, DROP cups_consumed, DROP last_drink_amount, DROP total_amount, CHANGE date date DATE NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE water_intakes ADD cups_consumed INT NOT NULL, ADD last_drink_amount INT NOT NULL, ADD total_amount INT NOT NULL, DROP time, CHANGE date date DATETIME NOT NULL, CHANGE amount daily_goal INT NOT NULL');
    }
}
