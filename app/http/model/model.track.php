<?php
namespace App\core\track;

use PDOException;

class Track {
    private $connection;
    private $Table = "tracking";
    public $alert;
    
    public function __construct($connection){
        $this->connection = $connection;
    }
    
    public function create($tracking_no,$Locationn,$Statuss,$Latitude,$Longtitude,$Remark){
        try{
        $query = "INSERT INTO {$this->Table} (tracking_no,locationn, statuss, latitude, longtitude, remark) VALUES (:tracking_no,:Locationn,:Statuss,:Latitude,:Longtitude,:Remark)";  
        $stmt = $this->connection->prepare($query);
        $stmt->bindParam(":tracking_no", $tracking_no);
        $stmt->bindParam(":Locationn", $Locationn);
        $stmt->bindParam(":Statuss", $Statuss);
        $stmt->bindParam(":Latitude", $Latitude);
        $stmt->bindParam(":Longtitude", $Longtitude);
        $stmt->bindParam(":Remark", $Remark);
        $stmt->execute();
        
        if($stmt->rowCount() == 1){
            $this->alert = " created successfully";
        } ;

        } catch(PDOException $e) {
            $this->alert = "error: " . $e->getMessage();
            return false;
        };
    }
    
   public function read(){
        $query = "SELECT * FROM {$this->Table}";
        $stmt = $this->connection->prepare($query);
        if($stmt->execute()){
            return $stmt;
        };
        return false;
   }

   public function readId($id){
        $query = "SELECT * FROM {$this->Table} WHERE tracking_no=:id";
        $stmt = $this->connection->prepare($query);
        $stmt->bindParam(":id", $id);
        $stmt->execute();
        if($stmt->rowCount() == 1){
            return $stmt;
        };
            return false;
   }

   public function update($Locationn,$Statuss,$Latitude,$Longtitude,$Remark,$UserId){
    try{

        $query = "UPDATE {$this->Table} SET locationn=:Locationn, statuss=:Statuss, latitude=:Latitude, longtitude=:Longtitude, remark=:Remark WHERE tracking_no=:UserId";
        $stmt = $this->connection->prepare($query);
        $stmt->bindParam(":Locationn", $Locationn);
        $stmt->bindParam(":Statuss", $Statuss);
        $stmt->bindParam(":Latitude", $Latitude);
        $stmt->bindParam(":Longtitude", $Longtitude);
        $stmt->bindParam(":Remark", $Remark);
        $stmt->bindParam(":UserId", $UserId);
        $stmt->execute();
        
        if($stmt->rowCount() == 1){
            $this->alert = "success: ";
        } ;

    } catch(PDOException $e) {
        $this->alert = "error: " . $e->getMessage();
        return false;
    };

} // ends update function

public function delete($UserId){
    try {
        $query = "DELETE FROM {$this->Table} WHERE tracking_no=:UserId";
        $stmt = $this->connection->prepare($query);
        $stmt->bindParam(":UserId", $UserId);
        $stmt->execute();
            
        if($stmt->rowCount() == 1){
            // $this->alert = "deleted: ";
        }; 
    } catch (PDOException $e) {
        $this->alert = "error: " . $e->getMessage();
    };
}



} // class ends