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
import { QueryKey } from "@/types/enums";
import { STALE_TIME } from "@/config/query";
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
    queryKey: [QueryKey.Skills],
    queryFn: () => client.fetch<SkillsQueryResult>(skillsQuery),
    staleTime: STALE_TIME.DEFAULT,
  });

export const useExperiences = () =>
  useQuery<ExperiencesQueryResult>({
    queryKey: [QueryKey.Experiences],
    queryFn: () => client.fetch<ExperiencesQueryResult>(experiencesQuery),
    staleTime: STALE_TIME.DEFAULT,
  });

export const useProjects = () =>
  useQuery<ProjectsQueryResult>({
    queryKey: [QueryKey.Projects],
    queryFn: () => client.fetch<ProjectsQueryResult>(projectsQuery),
    staleTime: STALE_TIME.DEFAULT,
  });

export const useBlogs = () =>
  useQuery<BlogsQueryResult>({
    queryKey: [QueryKey.Blogs],
    queryFn: () => client.fetch<BlogsQueryResult>(blogsQuery),
    staleTime: STALE_TIME.DEFAULT,
  });

export const useProfile = () =>
  useQuery<ProfileQueryResult>({
    queryKey: [QueryKey.Profile],
    queryFn: () => client.fetch<ProfileQueryResult>(profileQuery),
    staleTime: STALE_TIME.DEFAULT,
  });

export const useTestimonials = () =>
  useQuery<TestimonialsQueryResult>({
    queryKey: [QueryKey.Testimonials],
    queryFn: () => client.fetch<TestimonialsQueryResult>(testimonialsQuery),
    staleTime: STALE_TIME.DEFAULT,
  });

export const useComponents = () =>
  useQuery<ComponentsQueryResult>({
    queryKey: [QueryKey.Components],
    queryFn: () => client.fetch<ComponentsQueryResult>(componentsQuery),
    staleTime: STALE_TIME.DEFAULT,
  });

// Single source of truth for "how many projects/AI systems" stats shown
// across Hero, Skills, and Projects — all previously drifted independently
// (Hero read a stale profile.stats field, Skills read a hardcoded static
// PROJECTS array, Projects page computed it live). Every consumer of a
// project count should use this hook instead of deriving its own.
const visibleAiProjects = aiProjects.filter((p) => !p.hidden);

export const useProjectsCount = () =>
  useQuery<number>({
    queryKey: [QueryKey.ProjectsCount],
    queryFn: async () => {
      const sanityCount = await client.fetch<number>(projectsCountQuery);
      return sanityCount + visibleAiProjects.length;
    },
    staleTime: STALE_TIME.SHORT,
  });

export const useAiProjectsCount = () =>
  useQuery<number>({
    queryKey: [QueryKey.AiProjectsCount],
    queryFn: async () => {
      const sanityAiCount = await client.fetch<number>(aiProjectsCountQuery);
      // All hardcoded ai-projects.ts entries are AI systems by definition.
      return sanityAiCount + visibleAiProjects.length;
    },
    staleTime: STALE_TIME.SHORT,
  });
