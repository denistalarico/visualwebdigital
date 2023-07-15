<?php
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u628759500_ekQmf' );

/** Database username */
define( 'DB_USER', 'u628759500_UL8y8' );

/** Database password */
define( 'DB_PASSWORD', '1bQPCgDYOX' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'Qtkto~fK;[&8E3E q/GNCywZw+y>N,hZ!BU-,-LCI%u~>>l/%DKDjuzeC %Es0xm' );
define( 'SECURE_AUTH_KEY',   ' xy6X! (wy-umZrlV/P3%Pt/@mg1:Yjmdxx,c0i_gVa%3bil#H6}7,E^.3qP(^Yz' );
define( 'LOGGED_IN_KEY',     '/Sv;6(OCCXJ}W.-7TQ/Cj$o.uio=3EE&Cgu76-$lW|3XN`*V[xw0gEC<{BP32CK-' );
define( 'NONCE_KEY',         '}VH4Ay?,O+eyi@9Gq74S]zwbf8cGo4b@WtNc#[jV%Ic%><8!5DL`8QvAIc)E&*dl' );
define( 'AUTH_SALT',         '/7|nC.KNVEj)jni[E3mgj^`{C,@!9FcsCmsk=9j/Rev5ftlKDxDX2b;>(jg5U},,' );
define( 'SECURE_AUTH_SALT',  'C&DfF*j7~#@hnNL^*K(dftJ6bR}lce 4D0-{^w[/T<VI #$1b!d3-Z6tS|y4;&IK' );
define( 'LOGGED_IN_SALT',    '6#UWQlMNsZm2aW>3}D5VpYE0?0j_j t>Ns d*XoI]$n-O_%v_I`(f^0rU.NQXdAr' );
define( 'NONCE_SALT',        'Rv6$NC=&i-=M)`)#l+y |>kl;YALoEM8(XuK6.O%~PMzzp`Y7M%wz[)x+cMiQQ7o' );
define( 'WP_CACHE_KEY_SALT', '0qfr1m;B^<%HC4gZPzc4*X{O.DEIC.,]H.S]M,Uyi veIh[sUNL{}U@w4;a*_I8)' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */



define( 'WP_AUTO_UPDATE_CORE', true );
define( 'FS_METHOD', 'direct' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
