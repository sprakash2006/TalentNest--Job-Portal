import React, { useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';

const OnBoarding = () => {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();

  const handleRoleSelection = async (role) => {
    await user
    .update({
      unsafeMetadata : {role},
    })
    .then(() =>{
      navigate(role==="recruiter" ? "/post-job" : "/jobs");
    })
    .catch((err) => {
      console.error("Error updating role:",err);
    });
  };

  useEffect(() => {
    if(user?.unsafeMetadata?.role) {
      navigate(
        user?.unsafeMetadata?.role === "recruiter" ? "/post-job" : "/jobs"
      );
    }
  }, [user]);

  
  
  return (
    <div className="flex flex-col items-center justify-center pt-50">
      <h2 className="gradient-title font-extrabold text-7xl sm:text-8xl tracking-tighter">I am a...</h2>
      <div className="grid grid-cols-2 gap-40 w-full md:px-40 mt-30">
        <Button className="h-30 text-2xl bg-green-500" onClick={() => handleRoleSelection("candidate")}>Candidate</Button>
        <Button className="h-30 text-2xl bg-blue-400" onClick={() => handleRoleSelection("recruiter")}>Recruiter</Button>
      </div>
    </div>
  )
}

export default OnBoarding;
