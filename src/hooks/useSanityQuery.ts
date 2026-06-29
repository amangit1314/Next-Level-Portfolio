"use client";

import { useQuery } from "@tanstack/react-query";
import { client } from "@/sanity/lib/client";
import {
  skillsQuery,
  experiencesQuery,
  projectsQuery,
  blogsQuery,
  profileQuery,
  testimonialsQuery,
  componentsQuery,
} from "@/sanity/lib/queries";
import type {
  SkillsQueryResult,
  ExperiencesQueryResult,
  ProjectsQueryResult,
  BlogsQueryResult,
  ProfileQueryResult,
  TestimonialsQueryResult,
  ComponentsQueryResult,
} from "../../sanity.types";

export const useSkills = () =>
  useQuery<SkillsQueryResult>({
    queryKey: ["skills"],
    queryFn: () => client.fetch<SkillsQueryResult>(skillsQuery),
  });

export const useExperiences = () =>
  useQuery<ExperiencesQueryResult>({
    queryKey: ["experiences"],
    queryFn: () => client.fetch<ExperiencesQueryResult>(experiencesQuery),
  });

export const useProjects = () =>
  useQuery<ProjectsQueryResult>({
    queryKey: ["projects"],
    queryFn: () => client.fetch<ProjectsQueryResult>(projectsQuery),
  });

export const useBlogs = () =>
  useQuery<BlogsQueryResult>({
    queryKey: ["blogs"],
    queryFn: () => client.fetch<BlogsQueryResult>(blogsQuery),
  });

export const useProfile = () =>
  useQuery<ProfileQueryResult>({
    queryKey: ["profile"],
    queryFn: () => client.fetch<ProfileQueryResult>(profileQuery),
  });

export const useTestimonials = () =>
  useQuery<TestimonialsQueryResult>({
    queryKey: ["testimonials"],
    queryFn: () => client.fetch<TestimonialsQueryResult>(testimonialsQuery),
  });

export const useComponents = () =>
  useQuery<ComponentsQueryResult>({
    queryKey: ["components"],
    queryFn: () => client.fetch<ComponentsQueryResult>(componentsQuery),
  });
