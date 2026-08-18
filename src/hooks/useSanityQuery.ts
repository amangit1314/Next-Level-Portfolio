"use client";

import { useQuery } from "@tanstack/react-query";
import { client } from "@/sanity/lib/client";
import {
  skillsQuery,
  experiencesQuery,
  projectsQuery,
  projectsCountQuery,
  aiProjectsCountQuery,
  blogsQuery,
  profileQuery,
  testimonialsQuery,
  componentsQuery,
} from "@/sanity/lib/queries";
import { aiProjects } from "@/data/ai-projects";
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

// Single source of truth for "how many projects/AI systems" stats shown
// across Hero, Skills, and Projects — all previously drifted independently
// (Hero read a stale profile.stats field, Skills read a hardcoded static
// PROJECTS array, Projects page computed it live). Every consumer of a
// project count should use this hook instead of deriving its own.
const visibleAiProjects = aiProjects.filter((p) => !p.hidden);

export const useProjectsCount = () =>
  useQuery<number>({
    queryKey: ["projectsCount"],
    queryFn: async () => {
      const sanityCount = await client.fetch<number>(projectsCountQuery);
      return sanityCount + visibleAiProjects.length;
    },
  });

export const useAiProjectsCount = () =>
  useQuery<number>({
    queryKey: ["aiProjectsCount"],
    queryFn: async () => {
      const sanityAiCount = await client.fetch<number>(aiProjectsCountQuery);
      // All hardcoded ai-projects.ts entries are AI systems by definition.
      return sanityAiCount + visibleAiProjects.length;
    },
  });
