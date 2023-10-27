
# Test Metrix for Express
<table >
  <tr>
    <th>Metrix</th>
    <th>1000 r/ps</th>
    <th>10000 r/ps</th>
  </tr>
  <tr>
    <td>Time taken</td>
    <td>4.470 seconds</td>
    <td>27.199 seconds</td>
  </tr>
  <tr>
    <td>Requests per second</td>
    <td> 223.69[#/sec]</td>
    <td>367.66 [#/sec]</td>
  </tr>
  <tr>
    <td>Time per request</td>
    <td> 447.045 [ms]</td>
    <td>271.989 [ms]</td>
  </tr>
  <tr>
    <td>Transfer rate</td>
    <td> 41.72 [Kbytes/sec]</td>
    <td>68.58 [Kbytes/sec]</td>
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
    <td>98</td>
    <td>59.8</td>
    <td>88</td>
    <td>413</td>
  </tr>
  <tr>
    <td>Processing:</td>
    <td>2</td>
    <td>169</td>
    <td>74.5</td>
    <td>154</td>
    <td>522</td>
  </tr>
  <tr>
    <td>Waiting:</td>
    <td>2</td>
    <td>131</td>
    <td>60.6</td>
    <td>122</td>
    <td>415</td>
  </tr>
  <tr>
    <td>Total:</td>
    <td>12</td>
    <td>267</td>
    <td>90.2</td>
    <td>250</td>
    <td>679</td>
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
    <td>72</td>
    <td>77.8</td>
    <td>37</td>
    <td>365</td>
  </tr>
  <tr>
    <td>Processing:</td>
    <td>28</td>
    <td>215</td>
    <td>114.4</td>
    <td>194</td>
    <td>1462</td>
  </tr>
  <tr>
    <td>Waiting:</td>
    <td>24</td>
    <td>150</td>
    <td>116.5</td>
    <td>124</td>
    <td>1432</td>
  </tr>
  <tr>
    <td>Total:</td>
    <td>82</td>
    <td>286</td>
    <td>101.2</td>
    <td>280</td>
    <td>1462</td>
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
