

export function HowToSetup() {
  return (
<>
<div>
             Step 1 - Copy your bucket link
           </div>
           <div>
             Step 2 - Paste in your form action (Use POST method)
             <div className="rounded-md bg-black p-6">
            <pre>
              <code className="grid gap-1 text-sm text-muted-foreground [&_span]:h-4">
                {
                    `
                    <form action="www.veldora.com/">
                    </form>
                    `
                }
              </code>
            </pre>
          </div>
           </div>
</>

  );
}
