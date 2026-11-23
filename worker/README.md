# Ask the Brain: switching on the live AI

The Ask the Brain page already answers from SportingBrain's own checked content. To switch on live AI answers with web search:

1. Create an Anthropic API account at console.anthropic.com. Add a payment method and set a monthly spend limit (start with £20).
2. Create an API key. Keep it secret: never paste it into the website code.
3. Create a free Cloudflare account. Go to Workers and Pages, create a Worker called `ask-brain`, and paste in `ask-brain.js`.
4. In the Worker's Settings, add a secret called `ANTHROPIC_API_KEY` with your key.
5. Optional but recommended: create a KV namespace called `RATE` and bind it to the Worker, to limit each visitor to 20 questions a day.
6. Copy the Worker's address (it ends in workers.dev) and give it to Claude, who will put it in `source/src/data/config.js` and republish.
