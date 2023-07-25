// Collection: Patients
db.patients.insertOne({
  name: "John Doe",
  age: 35,
  gender: "Male",
  contact: {
    email: "johndoe@example.com",
    phone: "1234567890",
  },
  appointments: ["appointemnt_1_id", "appointment_2_id"],
});

// Collection: Doctors
db.doctors.insertOne({
  name: "Dr. Emily Wilson",
  specialization: "Cardiology",
  contact: {
    email: "emilywilson@example.com",
    phone: "9876543210",
  },
  patientID: ["patient_1_id", "patient_2_id"],
});

// Collection: Appointments
db.appointments.insertOne({
  patientId: ObjectId("patient_id_1"),
  doctorId: ObjectId("doctor_id_1"),
  status: "Scheduled",
});

// Collection: MedicalRecords
db.medicalRecords.insertOne({
  patientId: ObjectId("patient_id_1"),
  medicalHistory: "Patient's medical history...",
  medications: ["Medication A", "Medication B"],
  additionalInfo: "Additional information about the patient's health...",
});

// Indexing:

// To optimize query performance, we can create indexes on commonly queried fields. For example, in the above schema, we can create indexes on the following fields:
db.patients.createIndex({ name: 1 });
db.doctors.createIndex({ name: 1 });
db.appointments.createIndex({ patientId: 1 });
db.medicalRecords.createIndex({ patientId: 1 });

// One-to-Many between Doctors and Patients:
// 1. Find all patients of a specific doctor:
db.doctors.findOne({ _id: "doctor_id_1" }, { patientID: 1 });

// One-to-Many between Patients and Appointments:
// 2. Find all appointments of a specific patient:
db.patients.findOne({ _id: "patient_id_1" }, { appointments: 1 });

// One-to-One between Patients and Medical Records:
// 3. Find the medical record of a specific patient:
db.medicalRecords.findOne({ patientID: "patient_id_1" });
