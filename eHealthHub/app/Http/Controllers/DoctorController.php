<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDoctorRequest;
use App\Http\Requests\UpdateDoctorRequest;
use App\Models\Doctor;
use Illuminate\Http\Request;

class DoctorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // list all doctors
        $doctors = Doctor::all();
        return response()->json([
            'doctors' => $doctors
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email',
            'license_number' => 'required',
            'phone' => 'required',
            'specialization' => 'required',
            'bio' => 'required',
            'profile_picture' => 'required',
            'status' => 'required',
        ]);

        $validDoctor = Doctor::where('email', $request->email)->first();
        if ($validDoctor) {
            return response()->json([
                'error' => 'Doctor already exists'
            ]);
        }

        $doctor = new Doctor(
            [
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'license_number' => $request->license_number,
                'phone' => $request->phone,
                'specialization' => $request->specialization,
                'bio' => $request->bio,
                'profile_picture' => $request->profile_picture,
                'status' => $request->status,
            ]
            );
        
        if ($doctor->save()) {
            return response()->json([
                'success' => 'Doctor created successfully'
            ]);
        }
        return response()->json([
            'error' => 'Doctor creation failed'
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDoctorRequest $request)
    {
        // $request->validated(
            
        // );
    }

    /**
     * Display the specified resource.
     */
    public function show(Doctor $doctor)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Doctor $doctor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDoctorRequest $request, Doctor $doctor)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Doctor $doctor)
    {
        //
    }
}
