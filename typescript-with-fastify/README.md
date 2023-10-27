# Test Metrix for fastify
<table >
  <tr>
    <th>Metrix</th>
    <th>1000 r/ps</th>
    <th>10000 r/ps</th>
  </tr>
  <tr>
    <td>Time taken</td>
    <td>2.934 seconds</td>
    <td>26.124 seconds</td>
  </tr>
  <tr>
    <td>Requests per second</td>
    <td> 340.85 [#/sec]</td>
    <td>382.78 [#/sec]</td>
  </tr>
  <tr>
    <td>Time per request</td>
    <td> 293.383 [ms]</td>
    <td>261.244 [ms]</td>
  </tr>
  <tr>
    <td>Transfer rate</td>
    <td> 46.60 [Kbytes/sec]</td>
    <td>52.33 [Kbytes/sec]</td>
  </tr>
</table>

# Connection Times (ms) for 1000 Request

<table>
  <tr>
    <th></th>
    <th>min</th>
    <th>mean[+/-sd]</th>
    <th>median</th>
    <th>max</th>
  </tr>
  <tr>
    <td>Connect:</td>
    <td>0</td>
    <td>79</td>
    <td>67.5</td>
    <td>64</td>
    <td>294</td>
  </tr>
  <tr>
    <td>Processing:</td>
    <td>2</td>
    <td>187</td>
    <td>70.9</td>
    <td>189</td>
    <td>466</td>
  </tr>
  <tr>
    <td>Waiting:</td>
    <td>2</td>
    <td>134</td>
    <td>57.3</td>
    <td>120</td>
    <td>295</td>
  </tr>
  <tr>
    <td>Total:</td>
    <td>13</td>
    <td>266</td>
    <td>83.6</td>
    <td>262</td>
    <td>478</td>
  </tr>
</table>

# Connection Times (ms) for 10000 Request

<table>
  <tr>
    <th></th>
    <th>min</th>
    <th>mean[+/-sd]</th>
    <th>median</th>
    <th>max</th>
  </tr>
  <tr>
    <td>Connect:</td>
    <td>0</td>
    <td>104</td>
    <td>80.4</td>
    <td>89</td>
    <td>721</td>
  </tr>
  <tr>
    <td>Processing:</td>
    <td>2</td>
    <td>154</td>
    <td>92.3</td>
    <td>137</td>
    <td>952</td>
  </tr>
  <tr>
    <td>Waiting:</td>
    <td>2</td>
    <td>123</td>
    <td>82.8</td>
    <td>108</td>
    <td>722</td>
  </tr>
  <tr>
    <td>Total:</td>
    <td>17</td>
    <td>257</td>
    <td>125.9</td>
    <td>230</td>
    <td>1207</td>
  </tr>
</table>



To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.7. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
