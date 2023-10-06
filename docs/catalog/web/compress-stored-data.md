---
version: 1.0
submitted_by: franziska-warncke
published_date: TBD
category: cloud
tags: 
 - cloud
 - size:medium
---

# Compress stored data

## Description

Storing much uncompressed data can result in unnecessary bandwidth waste and increase the storage capacity requirements.

## Solution

Use the right compression tool for the use case to reduce the storage requirements, including both capacity and required bandwidth to write or retrieve data. 

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Concerning the SCI equation, using compression when storing data impact one part:

- `E`: Decrease the amount of storage and therefor less E for the storage. However, we should be aware that there may be a slight increase in energy consumed due to compressing and de-compressing data.

## Assumptions


## Considerations
- Consider the tradeoff of compression: Does the benefit of compression outweigh the increased carbon cost in the resources (CPU, RAM) needed to perform the compression/decompression?

## References

- [Blogpost](https://lemire.me/blog/2021/06/30/compressing-json-gzip-vs-zstd/)
- [Similar Issue](vitejs/vite#5295)