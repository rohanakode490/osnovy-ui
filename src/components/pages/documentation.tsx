import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Code2, Zap, FileCode } from 'lucide-react';
import { CopyButton } from '../ui/copy-button';

export const Documentation = () => {
  return (
    <div className='min-h-screen py-12 flex justify-center items-center'>
      <div className='container max-w-4xl'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='mb-12 text-center'
        >
          <h1 className='mb-4 text-4xl font-bold sm:text-5xl'>Documentation</h1>
          <p className='text-lg text-muted-foreground'>
            Everything you need to know to get started with ComponentHub
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className='space-y-6'
        >
          {/* Getting Started */}
          <Card className='border-border/50 bg-card/50 backdrop-blur-sm'>
            <CardHeader>
              <div className='flex items-center gap-3'>
                <div className='rounded-lg p-2'>
                  <Zap className='h-6 w-6 text-primary' strokeWidth={2} />
                </div>
                <div className='flex flex-col gap-1 '>
                  <CardTitle>Getting Started</CardTitle>
                  <CardDescription className='text-start'>
                    Quick setup guide
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div>
                <h3 className='mb-2 font-semibold text-start'>Prerequisites</h3>
                <ul className='list-inside list-disc space-y-1 text-sm text-muted-foreground text-start'>
                  <li>Node.js 18+ installed</li>
                  <li>React 18+ project</li>
                  <li>Tailwind CSS configured</li>
                </ul>
              </div>
              <h3 className='mb-2 font-semibold text-start'>Installation</h3>
              <pre className='relative overflow-x-auto rounded-lg border border-border/50 bg-muted p-4'>
                <code className='text-sm'>
                  <CopyButton
                    text='npm install framer-motion @radix-ui/react-* tailwindcss-animate'
                    className='absolute right-2 top-1/2 -translate-y-1/2 z-10'
                  />
                  npm install framer-motion @radix-ui/react-*
                  tailwindcss-animate
                </code>
              </pre>
            </CardContent>
          </Card>

          {/* Usage Guide */}
          <Card className='border-border/50 bg-card/50 backdrop-blur-sm'>
            <CardHeader>
              <div className='flex items-center gap-3'>
                <div className='rounded-lg p-2'>
                  <Code2 className='h-6 w-6 text-primary' strokeWidth={2} />
                </div>
                <div>
                  <CardTitle>How to Use Components</CardTitle>
                  <CardDescription className='text-start'>
                    Integration workflow
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className='list-inside list-decimal space-y-3 text-sm text-muted-foreground text-start'>
                <li>
                  Browse the component gallery and find the component you need
                </li>
                <li>Click on the component to view details and code</li>
                <li>Copy the code from the "Code" tab</li>
                <li>
                  Paste it into your React project and customize as needed
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card className='border-border/50 bg-card/50 backdrop-blur-sm'>
            <CardHeader>
              <div className='flex items-center gap-3'>
                <div className='rounded-lg p-2'>
                  <FileCode className='h-6 w-6 text-primary' strokeWidth={2} />
                </div>
                <div>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription className='text-start'>
                    Common questions and answers
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Accordion type='single' collapsible className='w-full'>
                <AccordionItem value='item-1'>
                  <AccordionTrigger>
                    Are these components free to use?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes! All components are open source and free to use in your
                    projects, both personal and commercial.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                  <AccordionTrigger>
                    Do I need to install all dependencies?
                  </AccordionTrigger>
                  <AccordionContent>
                    You only need to install dependencies for the specific
                    components you use. Each component page lists its
                    requirements.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                  <AccordionTrigger>
                    Can I customize the components?
                  </AccordionTrigger>
                  <AccordionContent>
                    Absolutely! All components are built with customization in
                    mind. Modify colors, animations, and styles through the
                    design system.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-4'>
                  <AccordionTrigger>
                    Are the components accessible?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, all components are built on top of Radix UI primitives
                    which provide excellent accessibility out of the box.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};
