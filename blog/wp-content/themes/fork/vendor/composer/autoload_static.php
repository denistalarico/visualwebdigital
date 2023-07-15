<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitfd288573004599dc6cff4b18fb59c4bc
{
    public static $files = array (
        '41f4e7c702f0739039ee3d8bef0f17e7' => __DIR__ . '/..' . '/codeinwp/themeisle-sdk/load.php',
    );

    public static $prefixLengthsPsr4 = array (
        'F' => 
        array (
            'Fork\\' => 5,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Fork\\' => 
        array (
            0 => __DIR__ . '/../..' . '/inc',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'Fork\\Admin' => __DIR__ . '/../..' . '/inc/Admin.php',
        'Fork\\Assets_Manager' => __DIR__ . '/../..' . '/inc/Assets_Manager.php',
        'Fork\\Block_Patterns' => __DIR__ . '/../..' . '/inc/Block_Patterns.php',
        'Fork\\Block_Styles' => __DIR__ . '/../..' . '/inc/Block_Styles.php',
        'Fork\\Constants' => __DIR__ . '/../..' . '/inc/Constants.php',
        'Fork\\Core' => __DIR__ . '/../..' . '/inc/Core.php',
        'Fork\\Starter_Content' => __DIR__ . '/../..' . '/inc/Starter_Content.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitfd288573004599dc6cff4b18fb59c4bc::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitfd288573004599dc6cff4b18fb59c4bc::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitfd288573004599dc6cff4b18fb59c4bc::$classMap;

        }, null, ClassLoader::class);
    }
}
