// usePageContent.ts
import gql from 'graphql-tag';
import { useQuery } from '@nuxtjs/apollo-composable';
import { Ref } from 'vue';

interface PageContent {
  title: string;
  content: string;
}

interface UsePageContentReturn {
  result: Ref<{ page: PageContent } | undefined>;
  loading: Ref<boolean>;
  error: Ref<Error | null>;
}

export function usePageContent(pageUri: string): UsePageContentReturn {
  const { result, loading, error } = useQuery(
    gql`
      query getPage($id: ID!) {
        page(id: $id, idType: URI) {
          title
          content
        }
      }
    `,
    { id: pageUri }
  );

  return { result, loading, error };
}
