// Mirrors profile.stats in Sanity (see profileQuery) — values are pre-formatted
// strings like "4+", "24+", not raw numbers, so consumers should render them
// as-is rather than appending their own "+" suffix.
export interface ProfileStats {
  experienceYears?: string;
  projectsCount?: string;
  technologiesCount?: string;
}
