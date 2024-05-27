<?php

namespace App\Repositories;

use App\Interfaces\PatientRepositoryInterface;
use App\Models\Patient;

class PatientRepository implements PatientRepositoryInterface
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }
    public function index(){
        return Patient::all();
    }
    public function getById($id){
        return Patient::findOrFail($id);
    }
    public function store(array $data){
        return Patient::store($data);
    }
    public function update(array $data,$id){
        return Patient::find($id)->update($data);
    }
    public function delete($id){
        return Patient::find($id)->delete();
    }
}
