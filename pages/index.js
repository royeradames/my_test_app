import { Page } from "@shopify/polaris";

const Index = () => (
  <Page
  primaryAction={{content: 'Create order'}}
  >
    <Heading>Shopify app with Node and React 🎉 by Royer Adames</Heading>
    <Button ariaExpanded={true}>Add product</Button>
  </Page>
);

export default Index;
