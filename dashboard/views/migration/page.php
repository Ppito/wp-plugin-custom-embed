<?php
/**
 * Migration page
 *
 * This page is used to migrate the plugin settings from the old
 */

?>

<div class="wrap">

    <?php require DM__PATH . 'dashboard/views/migration/header.php';?>


    <?php

    if ($tab === 'convert-player') {
        require DM__PATH . 'dashboard/views/migration/convert-player.php';
    } else  {
        require DM__PATH . 'dashboard/views/migration/migration.php';
    }

    ?>



</div>