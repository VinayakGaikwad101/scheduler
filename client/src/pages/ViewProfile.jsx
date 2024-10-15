import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { handleError } from "../utils/Toast";

const ViewProfile = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const canvasRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const registrationNumber = localStorage.getItem(
        "loggedUserRegistrationNumber"
      );
      const profileUrl = "http://localhost:8000/users/getProfile";

      try {
        const profileResponse = await fetch(profileUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ registrationNumber }),
        });

        const profileResult = await profileResponse.json();

        if (profileResult.success) {
          setData(profileResult.user);
        } else if (profileResult.message === "Profile not found") {
          setData({
            fullName: "Default User",
            email: "default@example.com",
            registrationNumber: "N/A",
            parentBranch: "N/A",
            parentBranchDivision: "N/A",
            parentBranchBatch: "N/A",
            parentBranchRollNo: "N/A",
            oe: "N/A",
            oeDivision: "N/A",
            oeBatch: "N/A",
            oeRollNo: "N/A",
            mdm: "N/A",
            mdmDivision: "N/A",
            mdmBatch: "N/A",
            mdmRollNo: "N/A",
          });
        } else {
          handleError("Error fetching profile data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        handleError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!loading && canvasRef.current) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
      renderer.setSize(300, 300);

      const loader = new GLTFLoader();
      let laptop;

      loader.load(
        '/assets/3d/laptop.glb',
        (gltf) => {
          laptop = gltf.scene;
          laptop.scale.set(0.5, 0.5, 0.5);
          scene.add(laptop);
        },
        undefined,
        (error) => console.error('An error happened', error)
      );

      camera.position.z = 5;

      const animate = () => {
        requestAnimationFrame(animate);
        if (laptop) {
          laptop.rotation.y += 0.01;
        }
        renderer.render(scene, camera);
      };

      animate();

      return () => {
        renderer.dispose();
      };
    }
  }, [loading]);

  const renderProfileInfo = (label, value) => (
    <motion.p
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-sm leading-tight mb-1"
    >
      <span className="font-semibold">{label}: </span>
      {value ? (
        value
      ) : (
        <span className="text-red-500">{label} not specified</span>
      )}
    </motion.p>
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-800"
        >
          Loading...
        </motion.h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10 p-6">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold mb-4 text-center text-gray-800"
      >
        User Profile
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="overflow-y-auto max-h-[70vh]">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold mb-2 text-gray-700"
          >
            Profile Information
          </motion.h2>
          {renderProfileInfo("Name", data.fullName)}
          {renderProfileInfo("Email", data.email)}
          {renderProfileInfo("Registration Number", data.registrationNumber)}
          {renderProfileInfo("Parent Branch", data.parentBranch)}
          {renderProfileInfo("Parent Branch Division", data.parentBranchDivision)}
          {renderProfileInfo("Parent Branch Batch", data.parentBranchBatch)}
          {renderProfileInfo("Parent Branch Roll No.", data.parentBranchRollNo)}
          {renderProfileInfo("Open Elective", data.oe)}
          {renderProfileInfo("Open Elective Division", data.oeDivision)}
          {renderProfileInfo("Open Elective Batch", data.oeBatch)}
          {renderProfileInfo("Open Elective Roll No.", data.oeRollNo)}
          {renderProfileInfo("MDM", data.mdm)}
          {renderProfileInfo("MDM Division", data.mdmDivision)}
          {renderProfileInfo("MDM Batch", data.mdmBatch)}
          {renderProfileInfo("MDM Roll No.", data.mdmRollNo)}
        </div>
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <canvas ref={canvasRef} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;