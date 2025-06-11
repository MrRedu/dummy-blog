import UseContext from '@/content/use-context.mdx';

// interface UseContextPageProps {}

function CustomH1({ children }: { children: React.ReactNode }) {
  return <h1 className="text-3xl text-blue-500">{children}</h1>;
}

const overrideComponents = {
  h1: CustomH1,
};

export default function UseContextPage() {
  // {}: UseContextPageProps

  return (
    <>
      <UseContext components={overrideComponents} />
    </>
  );
}
