<?php

namespace Routeing\wen;

class route {
    
    public function view($viewName){
        $path = __DIR__ . "/../resources/views/{$viewName}.php";
        if(file_exists($path)){
            include $path;
        } else {
            echo "unknown page";
        }
    }
    
    
    // class ends 
}