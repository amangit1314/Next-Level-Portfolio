import React from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ProjectFeature2 from './ProjectFeature2';

const ProjectsSection = () => {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="App">App</TabsTrigger>
        <TabsTrigger value="Web">Web</TabsTrigger>
        <TabsTrigger value="Full Stack">Web</TabsTrigger>
      </TabsList>
      <TabsContent value="App">
        <ProjectFeature2
          title={"Instagram Clone"}
          desc={
            "An Instagram Clone mobile application built with Flutter, Firebase Auth, Cloud Firestore, and a lot of patience and love."
          }
          img={
            "https://cdn.dribbble.com/users/1133834/screenshots/14693648/media/aae45e859d7f96e16c6213f90a8ded93.png?compress=1&resize=1200x900&vertical=top"
          }
        />
        <ProjectFeature2
          title={"SnapCart"}
          desc={
            "An Instagram Clone mobile application built with Flutter, Firebase Auth, Cloud Firestore, and a lot of patience and love."
          }
          img={
            "https://images.squarespace-cdn.com/content/v1/5c439fd8266c07ff148f5765/1600913493204-DU7B9IBR2UZ4XNNKDW8P/Top+20+Ecommerce+App+Inspiration+Ideas+%231-2.jpg"
          }
        />
        <ProjectFeature2
          title={"Convo Chat"}
          desc={
            "An Instagram Clone mobile application built with Flutter, Firebase Auth, Cloud Firestore, and a lot of patience and love."
          }
          img={
            "https://cdn.dribbble.com/users/3041456/screenshots/8576930/media/60fcd4617f00554fea74d255d233d765.png?resize=400x300&vertical=center"
          }
        />
      </TabsContent>
      <TabsContent value="Web"></TabsContent>
      <TabsContent value="Full Stack"></TabsContent>
    </Tabs>
  );
}

export default ProjectsSection