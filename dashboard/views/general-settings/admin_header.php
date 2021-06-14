<?php
/**
 * Header admin dashboard
 *
 * Please refer `$action` to admin.php on `load_admin_page()` function
 */
?>
<h1 class="wp-heading-inline">
    <?php echo __('Dailymotion HQ'); ?>
</h1>

<hr class="wp-header-end">

<nav class="nav-tab-wrapper wp-clearfix">
    <a href="<?php echo get_bloginfo('wpurl'); ?>/wp-admin/admin.php?page=dm-general-settings"
       class="nav-tab<?php echo $tab === 'mandatory' ? ' nav-tab-active' : ''; ?>"
    <?php echo $tab === 'mandatory' ? ' aria-current="page' : ''; ?>">Mandatory Settings</a>
    <a href="<?php echo get_bloginfo('wpurl'); ?>/wp-admin/admin.php?page=dm-general-settings&tab=content"
       class="nav-tab<?php echo $tab === 'content' ? ' nav-tab-active' : ''; ?>"
    <?php echo $tab === 'content' ? ' aria-current="page' : ''; ?>">Content Settings</a>
    <a href="<?php echo get_bloginfo('wpurl'); ?>/wp-admin/admin.php?page=dm-general-settings&tab=player"
       class="nav-tab<?php echo $tab === 'player' ? ' nav-tab-active' : ''; ?>"
    <?php echo $tab === 'player' ? ' aria-current="page' : ''; ?>">Player Settings</a>
</nav>
