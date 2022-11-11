---
version: 1.0
submitted_by: franziska-nttdata-hesselfeld
published_date: TBD
category: cloud
tags: 
 - compute
 - cloud
 - role:cloud-engineer
 - size:medium
---

# Scale infrastructure with user load

## Description

This pattern involves reviewing workloads for predictable patterns and identifying periods of low or no activity where resources can be scaled back.

## Solution

Scaling back resources during periods of low utilisation eliminates excess capacity and improves efficiency because a unit running at a high utilisation produces energy more efficiently. In addition, reducing the total number of resources used also reduces the amount of embodied carbon. Monitor and analyze the application usage patterns and activity to identify components that underutilized the hardware resources they are running on. Underutilized Virtual Machines, for example, can be easily identified by inspecting the CPU load over time. Underutilized resources can be consolidated, shut down on a schedule and/or removed.

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Concerning the SCI equation, scale infrastructure with user load, will impact two parts:

- `E`: Optimizing the application will lead to less electricity consumed over time
- `M`: Can reduce the embodied emissions if the application after the optimization uses less hardware overall

## Assumptions


## Considerations

- Consider starting with the easiest optimizations first (low hanging fruits)

## References

- [AWS Sustainability Pillar](https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/sus_sus_user_a2.html)