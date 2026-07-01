---
layout: single
title: "GPU-Accelerated Computing for AI and Computer Vision"
permalink: /phd-course-gpu-2026/
author_profile: true
toc: true
toc_label: "Contents"
toc_icon: "list"
toc_sticky: true
header:
  teaser: /images/gpu-course-teaser.jpg
excerpt: "PhD Course — 41st cycle, University of Bologna — July 2026"
---

<style>
.course-info-box {
  background-color: #f8f9fa;
  border-left: 4px solid #5e616c;
  padding: 1em 1.2em;
  margin: 1.5em 0;
  border-radius: 4px;
}
.course-info-box h4 {
  margin-top: 0;
  color: #2f3137;
}
.schedule-table {
  width: 100%;
  margin: 1em 0;
}
.schedule-table th {
  background-color: #2f3137;
  color: white;
  padding: 0.6em;
}
.schedule-table td {
  padding: 0.6em;
  border-bottom: 1px solid #e0e0e0;
}
.registration-cta {
  background: linear-gradient(135deg, #76b900 0%, #5e9400 100%);
  color: white;
  padding: 1.5em;
  text-align: center;
  border-radius: 6px;
  margin: 2em 0;
}
.registration-cta a {
  color: white;
  font-weight: bold;
  font-size: 1.15em;
  text-decoration: underline;
}
.topic-card {
  background-color: #fafafa;
  padding: 1em 1.2em;
  margin: 0.8em 0;
  border-left: 3px solid #76b900;
  border-radius: 3px;
}
.topic-card h3 {
  margin-top: 0;
  color: #2f3137;
}
</style>

<div class="course-info-box">
<h4><i class="fas fa-info-circle"></i> Course at a Glance</h4>
<ul style="margin-bottom: 0;">
  <li><strong>Instructor:</strong> <a href="https://fabiotosi92.github.io/">Fabio Tosi</a> — Junior Assistant Professor (RTDA), DISI, University of Bologna</li>
  <li><strong>Total hours:</strong> 14 hours (4 lectures × 3.5 hours)</li>
  <li><strong>Format:</strong> Blended — in person + Microsoft Teams streaming</li>
  <li><strong>Venue:</strong> Viale Risorgimento 2, Bologna (room varies by date, see schedule below)</li>
  <li><strong>Dates:</strong> 3, 6, 8, 10 July 2026</li>
  <li><strong>Teams link (all sessions):</strong> <a href="https://teams.microsoft.com/meet/387486588252201?p=35aJtaQ3w5KjolSVEc">Join Microsoft Teams Meeting</a></li>
  <li><strong>PhD Cycle:</strong> 41st</li>
</ul>
</div>

## Overview

This PhD course provides a hands-on, end-to-end understanding of how modern AI
and computer vision workloads execute on NVIDIA GPUs. It bridges the gap
between low-level CUDA programming and high-level deep learning frameworks
(PyTorch), with a strong emphasis on profiling and systematic optimization.

The course is aimed at PhD students in Computer Science, Engineering, and
related disciplines who want to understand and optimize the GPU performance
of their research code.

## <i class="fas fa-calendar-alt"></i> Schedule

All lectures will be held at **Viale Risorgimento 2, Bologna** (room varies by
date — see table below), and streamed live on **Microsoft Teams** using the
same link for all four sessions:
[Join Microsoft Teams Meeting](https://teams.microsoft.com/meet/387486588252201?p=35aJtaQ3w5KjolSVEc)

> **Update (July 1, 2026):** room assignments have been revised due to lack
> of air conditioning in the originally assigned room. The schedule below
> reflects the current, correct rooms.

<table class="schedule-table">
  <thead>
    <tr>
      <th>Date</th>
      <th>Time</th>
      <th>Location</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Friday, 3 July 2026</td>
      <td>9:00 – 12:30</td>
      <td>Room 5.5 + Teams</td>
    </tr>
    <tr>
      <td>Monday, 6 July 2026</td>
      <td>9:00 – 12:30</td>
      <td>Room 5.2 + Teams</td>
    </tr>
    <tr>
      <td>Wednesday, 8 July 2026</td>
      <td>9:00 – 12:30</td>
      <td>Room 1.5 + Teams</td>
    </tr>
    <tr>
      <td>Friday, 10 July 2026</td>
      <td>9:00 – 12:30</td>
      <td>Room 0.8 + Teams</td>
    </tr>
  </tbody>
</table>

## <i class="fas fa-check-square"></i> Prerequisites

The course assumes:

- **C programming language.** Students will read (and write) CUDA kernels,
  which are written in C/C++. Familiarity with pointers, memory allocation,
  and basic C syntax is required.
- **Python programming language.** Students will read (and modify) PyTorch
  code throughout the course.
- **Computer architecture fundamentals** *(recommended)*: notions of memory
  hierarchy, caches, and pipelining at the level of an introductory
  undergraduate course will help in understanding how a GPU executes work.
- **Linear algebra basics** (vectors, matrices, matrix multiplication) at
  the level of a first-year university course.

The course does **not** require:

- Prior experience with CUDA, GPU programming, or parallel computing.
- Prior experience with PyTorch, TensorFlow, or any deep learning framework.
- Knowledge of computer vision, neural networks, or deep learning theory.

> **Note:** basic familiarity with neural networks (what a layer is, what
> training and inference are) is not required, but students who have seen
> them before may find the PyTorch examples more immediately concrete.

Concepts from CUDA programming and the basics of how a GPU executes work
will be introduced from scratch. PyTorch will be presented as a "kernel
orchestrator" sitting on top of CUDA libraries — no prior PyTorch exposure
is assumed.

## <i class="fas fa-book-open"></i> Topics Covered

The course is organized in four 3.5-hour lectures, covering the following
topics:

<div class="topic-card">
<h3><i class="fas fa-code"></i> CUDA Programming Model</h3>
Threads, blocks, grids; index computation in 1D, 2D, 3D. Writing CUDA kernels:
vector addition, matrix operations. Practical examples in computer vision:
image rotation, flipping, 2D convolution.
</div>

<div class="topic-card">
<h3><i class="fas fa-microchip"></i> CUDA Execution Model</h3>
Streaming Multiprocessors (SM), warps, SIMT execution. Tensor cores:
low-precision matrix-multiply units. Occupancy and resource utilization.
</div>

<div class="topic-card">
<h3><i class="fas fa-memory"></i> CUDA Memory Model</h3>
Memory hierarchy: global, shared, registers, L1/L2 caches, constant memory.
Memory coalescing and alignment. Pinned memory, Unified Virtual Addressing
(UVA), Unified Memory.
</div>

<div class="topic-card">
<h3><i class="fab fa-python"></i> CUDA in Python</h3>
PyCUDA: writing and launching CUDA kernels from Python. PyTorch tensors and
the mapping between PyTorch operations and CUDA libraries (cuBLAS, cuDNN,
ATen). The training loop as a sequence of CUDA kernel launches.
</div>

<div class="topic-card">
<h3><i class="fas fa-tachometer-alt"></i> Profiling and Optimization</h3>
Profiling PyTorch with <code>torch.profiler</code>, Nsight Systems, Nsight
Compute. Reading kernel timelines and identifying bottlenecks. Theoretical
and measured FLOPs; the roofline model applied to PyTorch. Mixed precision
(FP16, BF16, TF32) and tensor cores. Graph capture and kernel fusion with
<code>torch.compile</code>.
</div>

<div class="topic-card">
<h3><i class="fas fa-rocket"></i> Applications</h3>
Examples and case studies from real computer vision research code.
Integrating custom CUDA kernels into PyTorch.
</div>

## <i class="fas fa-bullseye"></i> Learning Outcomes

By the end of the course, students will be able to:

- Read and understand CUDA kernel code, and explain how a GPU executes it.
- Write basic CUDA kernels for parallel data processing tasks.
- Profile a PyTorch model with `torch.profiler` and interpret the results.
- Identify whether a kernel is compute-bound or memory-bound and choose
  the appropriate optimization.
- Apply mixed precision and `torch.compile` to accelerate inference and
  training, and measure the resulting speedup.
- Integrate a custom CUDA kernel into a PyTorch model when no built-in
  operator is sufficient.

## <i class="fas fa-clipboard-check"></i> Final Verification

### A Hands-On Optimization Project

The course concludes with a small hands-on
optimization project. The objective is to apply the complete optimization
workflow presented throughout the course to a parallel workload of your
choice.

This can be a neural network, an image-processing pipeline, a handwritten
CUDA C kernel, or—ideally—a workload from your own research. You will profile
it, identify the performance bottleneck, implement an optimization, verify
correctness, and submit a short report describing the process and the
performance improvement achieved.

### The Workflow

1. **Measure** – Run the baseline implementation with a profiler.
2. **Diagnose** – Determine whether the workload is compute- or memory-bound,
   and justify your conclusion with quantitative evidence.
3. **Optimize** – Apply the optimization suggested by your analysis.
4. **Verify** – Confirm that the optimized implementation still produces
   correct results.
5. **Measure Again** – Profile the optimized version and report the actual
   speedup.

The goal is not simply to optimize a single program, but to demonstrate that
you can apply a systematic performance-engineering workflow to any GPU
workload—including your own research code.

## <i class="fas fa-file-alt"></i> Materials

Slides and code examples will be distributed to enrolled students after
each lecture. All examples will be reproducible on a standard NVIDIA GPU.

## <i class="fas fa-user-plus"></i> Registration

<div class="registration-cta">
<i class="fas fa-edit" style="font-size: 1.5em;"></i><br>
<strong>Registration is required</strong> — for organizational purposes and
to receive the Microsoft Teams link for remote attendance.
<br><br>
<a href="https://docs.google.com/forms/d/e/1FAIpQLSd4dSnQnF99RDq9DwfMp0Xv1GdU6aRIwuQbf48AAK9sLcXSsg/viewform?usp=publish-editor">→ Open the Registration Form</a>
</div>

## <i class="fas fa-envelope"></i> Contact

For questions about the course, please contact:
[fabio.tosi5@unibo.it](mailto:fabio.tosi5@unibo.it)